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
import TableHeader from "./TableHeader";
// import ChartContainer from "./ChartContainer";
// import PriceChart from "./PriceChart";

class CryptoChartDash extends Component {
  render() {
    // console.log("chartDash", this.props.historicals);
    // const length = this.props.historicals.length;
    const filtered = this.props.historicals.filter((obj, index) => {
      return (
        index <= this.props.historicals.length - 1 &&
        index > this.props.historicals.length - 31
      );
    });
    console.log("filetered", filtered);
    return (
      <div>
        {/* <Container style={{ padding: "5em 0em" }}> */}
        <Segment>
          {/* <PriceChart historicals={this.props.historicals.filter(obj => )}/> */}
          <TableHeader historicals={this.props.historicals} />
        </Segment>
        {/* </Container> */}
      </div>
    );
  }
}

export default CryptoChartDash;
