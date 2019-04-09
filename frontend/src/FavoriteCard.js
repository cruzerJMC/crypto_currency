import React from "react";
import {
  Card,
  Image,
  Statistic,
  Divider,
  Label,
  Header,
  Table,
  Icon,
  Segment,
  Grid,
  Button
} from "semantic-ui-react";

const FavoriteCard = props => {
  return (
    <div>
      <Segment inverted color="black">
        <Button circular>X</Button>
        {/* <Grid columns="equal" stackable textAlign="center"> */}
        {/* <Divider vertical>|</Divider> */}
        {/* <Grid.Row color="black">
            <Grid.Column> */}
        <Card inverted color="orange">
          <Card.Content color="orange">
            <Image
              onClick={() => props.showDetails(props.id)}
              size="tiny"
              floated="right"
              // centered
              src={`http://cryptocompare.com/${props.image}`}
            />
            <Card.Header color="orange">
              <h1>{props.ticker}</h1>
            </Card.Header>
            <Card.Meta color="orange">
              <h2>{props.company}</h2>
            </Card.Meta>
            <Card.Description color="orange">
              <div>OPENING PRICE</div>
              <Statistic horizontal color="green" size="mini">
                {/* <Label color="grey" horizontal>
                  <h3>PRICE:</h3>
                </Label> */}
                <Statistic.Value>{props.OPENDAY}</Statistic.Value>
              </Statistic>
            </Card.Description>
          </Card.Content>
        </Card>

        {/* </Grid.Column>
            <Grid.Column width={12}> */}
        {/* </Segment> */}
        {/* <Segment compact> */}
        {/* <Divider horizontal>
                <Header as="h4">
                  <Icon name="bar chart" />
                  Specifications
                </Header>
              </Divider> */}

        {/* <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={2}>Size</Table.Cell>
              <Table.Cell>http://cryptocompare.com{props.overview}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Weight</Table.Cell>
              <Table.Cell>6 ounces</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Color</Table.Cell>
              <Table.Cell>Yellowish</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Odor</Table.Cell>
              <Table.Cell>Not Much Usually</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table> */}

        {/* </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </Segment>
      {/* </Segment.Group> */}
      <Divider inverted />
    </div>
  );
};

export default FavoriteCard;
