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
  List,
  Grid,
  Message
} from "semantic-ui-react";

class CryptoSummary extends Component {
  render() {
    console.log("Summary", this.props);
    return (
      //
      <div>
        <Segment inverted attached="top">
          <Header as="h4" inverted color="blue">
            <h1>
              {this.props.crypto.company}: {this.props.crypto.ticker}
            </h1>
          </Header>
        </Segment>

        <Message attached content="Message" icon="help circle" info />

        <Table attached="bottom" definition striped>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Market Cap:</Table.Cell>
              <Table.Cell>{this.props.crypto.MKTCAP}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Last Market:</Table.Cell>
              <Table.Cell>{this.props.crypto.LASTMARKET}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Change Day:(%)/($)</Table.Cell>
              <Table.Cell>
                {this.props.crypto.CHANGEPCTDAY}/{this.props.crypto.CHANGEDAY}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Change 24 Hour:(%)/($)</Table.Cell>
              <Table.Cell>
                {this.props.crypto.CHANGEPCT24HOUR}/
                {this.props.crypto.CHANGE24HOUR}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Supply:</Table.Cell>
              <Table.Cell>{this.props.crypto.SUPPLY}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Volume:</Table.Cell>
              <Table.Cell>{this.props.crypto.VOLUMEDAY}</Table.Cell>
            </Table.Row>

            {/* <Table.Row>
              <Table.Cell width={2}>Price:</Table.Cell>
              <Table.Cell>Not Much Usually</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={2}>Price:</Table.Cell>
              <Table.Cell>Not Much Usually</Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default CryptoSummary;
