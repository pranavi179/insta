import React, { Component } from "react";
import { View } from "react-native";

class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 3 }}>
        <View style={{ flex: 3, backgroundColor: "powderblue" }} />
      </View>
    );
  }
}

export default footer;
