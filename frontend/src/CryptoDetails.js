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
  Message,
  Statistic
} from "semantic-ui-react";
import NewsFeed from "./NewsFeed";
import NewsPopup from "./NewsPopup";

import CryptoSummary from "./CryptoSummary";

class CryptoDetails extends Component {
  state = {
    showPopup: false,
    clickedArticle: null
  };

  showArticle = newsId => {
    const clickedArticle = this.props.filteredNews.find(article => {
      return article.id === newsId;
    });
    console.log("showing", clickedArticle);
    this.setState({
      clickedArticle: clickedArticle
    });
  };

  togglePopup = () => {
    console.log("Pop Up");
    this.setState({
      showPopup: !this.state.showPopup
    });
  };
  render() {
    console.log("CryptoDetails", this.props);
    return (
      <div>
        {this.state.showPopup ? (
          <NewsPopup
            clickedArticle={this.state.clickedArticle}
            closePopup={this.togglePopup}
          />
        ) : (
          // <Container fluid>
          <div>
            <Segment style={{ padding: "0em" }} vertical>
              <Grid celled="internally" columns="equal" stackable>
                <Grid.Row textAlign="center">
                  <Grid.Column
                    style={{ paddingBottom: "5em", paddingTop: "5em" }}
                  >
                    <style>{`.ui.grid.divided:not([class*="vertically divided"]) > .row > .column {
        box-shadow: -1px 0 0 0 #d4d4d4;
      }
      .ui[class*="vertically divided"].grid > .row:before {
        box-shadow: 0 -1px 0 0 rgba(212, 212, 212, 1.0);
      }
    `}</style>
                    <Grid columns={2} divided>
                      <Grid.Row verticalAlign="middle">
                        <Grid.Column width={4} floated="left">
                          <Card>
                            <Image
                              src={`http://cryptocompare.com/${
                                this.props.clickedCrypto.image
                              }`}
                              size="medium"
                              circular
                            />
                            <Card.Content>
                              <Card.Header>
                                {" "}
                                <h1>{this.props.clickedCrypto.company}</h1>
                              </Card.Header>
                              <Card.Meta>
                                <h2>{this.props.clickedCrypto.ticker}</h2>
                              </Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                              <Statistic horizontal color="green" size="mini">
                                <Statistic.Value>
                                  {this.props.clickedCrypto.price}
                                </Statistic.Value>
                              </Statistic>
                            </Card.Content>
                          </Card>
                        </Grid.Column>

                        <Grid.Column width={12} floated="left">
                          <CryptoSummary crypto={this.props.clickedCrypto} />
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            {/* <Divider horizontal>
            <ChartComponent data={this.props.historicals} />
          </Divider> */}

            <NewsFeed
              togglePopup={this.togglePopup}
              filteredNews={this.props.filteredNews}
              showArticle={this.showArticle}
            />
          </div>
          // </Container>
        )}
      </div>
    );
  }
}

export default CryptoDetails;
