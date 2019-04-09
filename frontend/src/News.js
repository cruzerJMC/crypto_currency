import React, { Component } from "react";

import {
  Image,
  Button,
  Table,
  Segment,
  Grid,
  List,
  Message
} from "semantic-ui-react";

import Linkify from "react-linkify";

class News extends Component {
  doubleClickNews = () => {
    console.log("NEWS Firing");
    this.props.togglePopup();
    this.props.showArticle(this.props.id);
  };

  render() {
    console.log("news Props", this.props);
    const source = this.props.source.toUpperCase();
    return (
      <List divided verticalAlign="middle">
        <List.Item>
          {/* <List.Content floated='right'> */}
          <Grid columns={2} compact divided>
            <Grid.Row>
              <Grid.Column width={2}>
                <Image
                  floated="left"
                  size="small"
                  src={this.props.img}
                  // style={{ margin: "2em 2em 2em -4em" }}
                />
                <div>{this.props.date}</div>
              </Grid.Column>
              <Grid.Column width={14}>
                <Message floated="left" size="small" info>
                  <Message.Header>
                    {source}:{this.props.title}
                  </Message.Header>
                  <p>{this.props.body}</p>
                  <Message.Header>
                    <Linkify>Source:{this.props.url}</Linkify>
                  </Message.Header>
                </Message>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </List.Item>
      </List>

      // <Table.Row>
      //   <Table.Cell>
      //     <Image
      //       onClick={() => this.doubleClickNews()}
      //       src={this.props.img}
      //       size="mini"
      //       centered
      //     />
      //   </Table.Cell>
      //   <Table.Cell collapsing>
      //     {this.props.source}:{this.props.title}
      //   </Table.Cell>
      //   <Table.Cell collapsing>{this.props.date}</Table.Cell>
      //   {/* <Table.Cell>{this.props.market}</Table.Cell>
      //   <Table.Cell>{this.props.price}</Table.Cell>
      //   <Table.Cell>{this.props.CHANGEPCTDAY}%</Table.Cell>
      //   <Table.Cell>{this.props.MKTCAP}</Table.Cell>
      //   <Table.Cell>{this.props.SUPPLY}</Table.Cell> */}
      // </Table.Row>
    );
  }
}

export default News;
