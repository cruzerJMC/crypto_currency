import React from "react";
// import uuid from "uuid";

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
import PriceTable from "./PriceTable";

const TableHeader = props => {
  console.log("LIST", props);
  return (
    <Segment>
      <Table color={"blue"} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Open</Table.HeaderCell>
            <Table.HeaderCell>High</Table.HeaderCell>
            <Table.HeaderCell>Low</Table.HeaderCell>
            <Table.HeaderCell>Close</Table.HeaderCell>
            <Table.HeaderCell>Daily % Change</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {props.historicals.map((crypto, index) => {
            return <PriceTable key={index} {...crypto} />;
          })}
        </Table.Body>
      </Table>
    </Segment>
  );
};
export default TableHeader;
