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
// import FavoriteCard from "./FavoriteCard";
import WeeklyChart from "./WeeklyChart";

class WeeklyCharts extends Component {
  render() {
    console.log("Charts", this.props);
    // const chartOne = this.props.histOne.reverse();
    // console.log("ChartOne", chartOne);

    return (
      <div>
        {/* {this.props.histOne.length !== 0 ? <div>test</div> : null} */}
        {this.props.histOne.map((crypto, index) => {
          // console.log("Item", crypto[0]);
          return <WeeklyChart key={index} {...crypto} />;
        })}
        {this.props.histTwo.map((crypto, index) => {
          // console.log("Item", crypto[0]);
          return <WeeklyChart key={index} {...crypto} />;
        })}
        {this.props.histThree.map((crypto, index) => {
          // console.log("Item", crypto[0]);
          return <WeeklyChart key={index} {...crypto} />;
        })}
        {this.props.histFour.map((crypto, index) => {
          // console.log("Item", crypto[0]);
          return <WeeklyChart key={index} {...crypto} />;
        })}
        {this.props.histFive.map((crypto, index) => {
          // console.log("Item", crypto[0]);
          return <WeeklyChart key={index} {...crypto} />;
        })}
        {this.props.histSix.map((crypto, index) => {
          // console.log("Item", crypto[0]);
          return <WeeklyChart key={index} {...crypto} />;
        })}
      </div>
    );
  }
}

export default WeeklyCharts;
