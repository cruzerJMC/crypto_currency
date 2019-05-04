import React, { Component } from "react";
import { Image, Button, Table, Statistic, Icon } from "semantic-ui-react";

class Crypto extends Component {
  state = {
    currentPrice: [],
    pastPrice: []
  };

  componentDidMount() {
    this.timer = setInterval(() => this.setCryptoPrice(), 5000);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  setCryptoPrice = () => {
    this.setState({
      currentPrice: this.props.price,
      pastPrice: this.state.currentPrice
    });
  };

  handlePriceChange = () => {
    if (this.state.currentPrice > this.state.pastPrice) {
      return "#7FFF00";
    } else if (this.state.currentPrice < this.state.pastPrice) {
      return "red";
    } else {
      return "white";
    }
  };

  render() {
    // console.log("Crypto Props", this.props);
    return (
      <Table.Row>
        <Table.Cell>
          <Image
            onClick={() => this.props.showDetails(this.props.id)}
            src={`http://cryptocompare.com/${this.props.image}`}
            size="mini"
            circular
            centered
          />
        </Table.Cell>

        <Table.Cell>
          <Statistic size="mini" inverted>
            <Statistic.Value>{this.props.company}</Statistic.Value>
          </Statistic>
        </Table.Cell>
        <Table.Cell>
          <Statistic size="mini" inverted>
            <Statistic.Value>{this.props.ticker}</Statistic.Value>
          </Statistic>
        </Table.Cell>
        <Table.Cell>
          <Statistic size="mini">
            <Statistic.Value>
              {/* <Icon name="dollar sign" /> */}
              <strong style={{ color: this.handlePriceChange() }}>
                {this.state.currentPrice}
              </strong>
            </Statistic.Value>
            {/* <Statistic.Value>{this.props.price}</Statistic.Value> */}
          </Statistic>
        </Table.Cell>
        <Table.Cell>
          <Statistic size="mini" color="orange">
            <Statistic.Value>{this.props.CHANGEPCTDAY}%</Statistic.Value>
          </Statistic>
        </Table.Cell>
        <Table.Cell>
          <Statistic size="mini" color="orange">
            <Statistic.Value>{this.props.CHANGEDAY}</Statistic.Value>
          </Statistic>
        </Table.Cell>
        <Table.Cell>
          <Statistic size="mini" color="orange">
            <Statistic.Value>{this.props.MKTCAP}</Statistic.Value>
          </Statistic>
        </Table.Cell>
        <Table.Cell>
          <Button
            onClick={() => this.props.handleHistoricalPost(this.props.ticker)}
            icon="dollar"
          />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default Crypto;
