import React, { Component } from "react";
import { Message, Image, Segment, Grid } from "semantic-ui-react";

// const LeftImage = () => (
//   <Image
//     floated='left'
//     size='medium'
//     src='/images/wireframe/square-image.png'
//     style={{ margin: '2em 2em 2em -4em' }}
//   />
// )

export default class NewsPopup extends Component {
  render() {
    console.log("popup", this.props.clickedArticle.body);
    return (
      <div>
        <Segment>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={2}>
                <Image
                  floated="left"
                  size="small"
                  src={this.props.clickedArticle.img}
                  // style={{ margin: "2em 2em 2em -4em" }}
                />
              </Grid.Column>
              <Grid.Column width={12}>
                <Message floated="right" size="small" info>
                  <Message.Header>
                    {this.props.clickedArticle.title}
                  </Message.Header>
                  <p>{this.props.clickedArticle.body}</p>
                </Message>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <button onClick={this.props.closePopup}>close me</button>
        </Segment>
      </div>
    );
  }
}
