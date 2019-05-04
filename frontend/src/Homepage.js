import React, { Component } from "react";
import CryptoList from "./CryptoList";
import CryptoDash from "./CryptoDash";
// import Favorites from "./Favorites";
import Search from "./Search";
import io from "socket.io-client";
import WeeklyCharts from "./WeeklyCharts";

import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class Homepage extends Component {
  state = {
    coinList: [],
    histOne: [],
    histTwo: [],
    histThree: [],
    histFour: [],
    histFive: [],
    histSix: [],
    priorCoinList: [],
    newsList: [],
    coinDetails: [],
    coins: [],
    clickedCrypto: null,
    favorites: [],
    favoriteHidden: true,
    inputValue: "",
    response: false,
    endpoint: "http://localhost:5000"
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/allcoins")
      .then(response => {
        return response.json();
      })
      .then(allCoins => {
        return this.setState({
          coins: allCoins
        });
      });
    fetch("http://localhost:5000/api/news")
      .then(response => {
        return response.json();
      })
      .then(newsData => {
        return this.setState({
          newsList: newsData
        });
      });
  }

  showDetails = itemId => {
    const clickedCrypto = this.state.coinList.find(item => item.id === itemId);
    console.log("showing", clickedCrypto);
    this.setState({
      clickedCrypto: clickedCrypto
    });
  };

  addFav = itemId => {
    // console.log("firing")
    const foundCrypto = this.state.coinList.find(item => item.id === itemId);
    const preventDoubles = this.state.favorites.find(
      item => item.id === itemId
    );
    if (!preventDoubles) {
      this.setState({
        favorites: [...this.state.favorites, foundCrypto]
      });
    }
  };
  handleChange = event => {
    // console.log("Changing")
    // console.log (event.target.name)
    this.setState({
      inputValue: event.target.value
    });
  };

  filterCryptos = () =>
    this.state.coinList.filter(item => {
      return (
        item.company
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.ticker
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.market.toLowerCase().includes(this.state.inputValue.toLowerCase())
      );
    });

  handleHistoricalPost = async cryptoTicker => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/historicals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: cryptoTicker })
    });
    const body = await response.json();
    console.log(body);
    this.setState({
      // historicals: body,
      // histOne: body,
      histOne: body.map((price, index) => {
        return {
          dayOne: price[0],
          dayTwo: price[1],
          dayThree: price[2],
          dayFour: price[3],
          dayFive: price[4]
        };
      }),
      histTwo: this.state.histOne,
      histThree: this.state.histTwo,
      histFour: this.state.histThree,
      histFive: this.state.histFour,
      histSix: this.state.histFive
    });
  };

  toggleDetails = () => {
    // console.log("dhowing Details page");
    this.setState({
      // detailsPage: !this.state.detailsPage
      clickedCrypto: null
    });
  };

  getInitialState = () => {
    return {
      status: "disconnected"
    };
  };
  componentWillMount() {
    this.socket = io("http://localhost:5000");
    this.socket.on("connect", this.connect);
    this.socket.on("disconnect", this.disconnect);
    const { endpoint } = this.state;
    const socket = io(endpoint);
    socket.on("FromAPI", data =>
      this.setState({ coinList: data, priorCoinList: this.state.coinList })
    );
  }

  connect = () => {
    // alert("Connected:" + this.socket.id);
    this.setState({ state: "connected" });
  };

  disconnect = () => {
    // alert("disconnected:" + this.socket.id);
    this.setState({ state: "disconnected" });
  };
  render() {
    console.log("homepage", this.state);
    // console.log("homepage coinPrice", this.state.response);
    return (
      <div>
        {!this.state.clickedCrypto ? (
          <div>
            <Search
              handleChange={this.handleChange}
              inputValue={this.state.inputValue}
            />
            {/* <Profile status={this.state.status} /> */}
            <Segment raised>
              <Grid color="black" columns={2} textAlign="center">
                <Grid.Row color="black">
                  <Grid.Column width={12} color="black">
                    <CryptoList
                      coinList={this.filterCryptos()}
                      showDetails={this.showDetails}
                      handleHistoricalPost={this.handleHistoricalPost}

                      // addFav={this.addFav}
                    />
                  </Grid.Column>
                  <Grid.Column width={4} color="black">
                    {this.state.histOne.length === 0 ? (
                      <Message color="blue">
                        CLICK CRYPTO TO VIEW WEEKLY PRICE CHART
                      </Message>
                    ) : (
                      <WeeklyCharts
                        histOne={this.state.histOne}
                        histTwo={this.state.histTwo}
                        histThree={this.state.histThree}
                        histFour={this.state.histFour}
                        histFive={this.state.histFive}
                        histSix={this.state.histSix}
                      />
                    )}
                    {/* <Favorites
                      favorites={this.state.favorites}
                      showDetails={this.showDetails}
                    /> */}
                  </Grid.Column>
                  {/* </Segment> */}
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        ) : (
          // {/* </Segment> */}
          <CryptoDash
            news={this.state.newsList}
            clickedCrypto={this.state.clickedCrypto}
            toggleDetails={this.toggleDetails}
          />
        )}
      </div>
    );
  }
}

export default Homepage;
