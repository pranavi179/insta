import React, { Component } from "react";
import { View, Image, Text } from "react-native";

class image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image
    };
  }
  render() {
    return (
      <View>
        <Text>hey </Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../images/elon.jpg")}
        />
      </View>
    );
  }
}

export default image;
