import React from "react";
import CryptoMenu from "./CryptoMenu";
import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Table
} from "semantic-ui-react";

const CryptoList = props => {
  // console.log("LIST", props);
  return (
    // <Segment>

    <Table color={"grey"} inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Click for Stats</Table.HeaderCell>
          <Table.HeaderCell>CyrptoCurrency</Table.HeaderCell>
          <Table.HeaderCell>Ticker</Table.HeaderCell>
          {/* <Table.HeaderCell>Exchange</Table.HeaderCell> */}
          <Table.HeaderCell>Current Price</Table.HeaderCell>
          <Table.HeaderCell>24H Change (%)</Table.HeaderCell>
          <Table.HeaderCell>24H Change ($)</Table.HeaderCell>
          <Table.HeaderCell>Market Cap</Table.HeaderCell>
          {/* <Table.HeaderCell>Total Supply</Table.HeaderCell> */}
          <Table.HeaderCell>Add to Favorites</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.coinList.map(currency => (
          <CryptoMenu
            key={currency.id}
            {...currency}
            showDetails={props.showDetails}
            addFav={props.addFav}
          />
        ))}
      </Table.Body>
    </Table>
  );
};
export default CryptoList;
