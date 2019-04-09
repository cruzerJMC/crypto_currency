import React, { Component } from "react";
import News from "./News";
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

export default class NewsPopup extends Component {
  // state = {
  //   showPopup: false
  // };
  render() {
    console.log("newsfeed", this.props);
    return (
      <div>
        <Segment inverted>
          <Header as="h4">
            <Icon name="bar chart" />
            Cyrpto News Feed
          </Header>
          {/* <Table striped compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="3">Git Repository</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body> */}
          {this.props.filteredNews.map(article => {
            return (
              <News
                key={article.id}
                {...article}
                togglePopup={this.props.togglePopup}
                showArticle={this.props.showArticle}
              />
            );
          })}
          {/* </Table.Body>
          </Table> */}
        </Segment>
      </div>
    );
  }
}
