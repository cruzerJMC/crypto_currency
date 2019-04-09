import React, { Component } from "react";
import { Image, Button, Table, Statistic } from "semantic-ui-react";

class CryptoMenu extends Component {
  render() {
    // console.log("Menu Props", this.props);
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
          <Statistic size="mini" color="orange">
            <Statistic.Value>{this.props.price}</Statistic.Value>
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
            onClick={() => this.props.addFav(this.props.id)}
            icon="heart"
          />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default CryptoMenu;
