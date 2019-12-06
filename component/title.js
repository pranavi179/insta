import React, { Component } from "react";
import { View, Container,Text } from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class ITitle extends Component {
//   static navigationOptions = {
//     headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
//     title: "Instagram",
//     headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />
//   };

  render() {
    return (
        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

    );
  }
}
