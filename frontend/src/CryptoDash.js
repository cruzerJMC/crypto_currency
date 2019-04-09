import React, { Component } from "react";
import {
  Image,
  Button,
  Table,
  Container,
  Segment,
  Card,
  Icon,
  Divider,
  Header,
  List
} from "semantic-ui-react";
import CryptoDetails from "./CryptoDetails";
import CryptoChartDash from "./CryptoChartDash";

class CryptoDash extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: "",
    historicals: [],
    chartHide: true
  };

  handleClickPost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/historical", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.props.clickedCrypto.ticker })
    });
    const body = await response.json();
    console.log(body);
    this.setState({
      historicals: body
    });
  };

  toggleChartHide = () => {
    console.log("Where you be Hiding Form");
    return this.setState({ chartHide: false });
  };

  doubleClick = () => {
    this.handleClickPost();
    this.toggleChartHide();
  };

  render() {
    const series1 = this.state.historicals.map(object => {
      let date = object.date;
      let price = object.close;
      let lineObj = { [date]: price };
      return lineObj;
    });
    console.log("Day", series1);

    return (
      <div>
        <Container style={{ padding: "5em 0em" }}>
          {this.state.chartHide ? (
            <div>
              <Button onClick={() => this.doubleClick()}>
                Historical Price
              </Button>

              <CryptoDetails
                filteredNews={this.props.news.filter(article => {
                  return article.mentions === this.props.clickedCrypto.ticker;
                })}
                clickedCrypto={this.props.clickedCrypto}
                historicals={this.state.historicals}
              />
            </div>
          ) : (
            <CryptoChartDash
              clickedCrypto={this.props.clickedCrypto}
              historicals={this.state.historicals}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default CryptoDash;
