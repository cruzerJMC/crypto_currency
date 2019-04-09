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
import FavoriteList from "./FavoriteList";

class Favorites extends Component {
  render() {
    return (
      // <FavoriteList
      //   coinList={this.props.coinList.filter(crypto => {
      //     return crypto.index < 25;
      //   })}
      // />
      <FavoriteList
        favorites={this.props.favorites}
        showDetails={this.props.showDetails}
      />
    );
  }
}

export default Favorites;
