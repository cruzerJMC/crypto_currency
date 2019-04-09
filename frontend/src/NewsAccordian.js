import React, { Component } from "react";
import { Accordion, Icon, Container, Segment } from "semantic-ui-react";

export default class NewsAccordian extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name="dropdown" />
          {this.props.title}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          {this.props.body}
        </Accordion.Content>
      </Accordion>
    );
  }
}
