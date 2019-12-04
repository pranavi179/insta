import React, { Component } from "react";
import { View } from "react-native";

export default class Layout extends Component {
  render() {
    return (
      <View>
        <View style={{ flex: 1, width: 500, height: 500 }} />
        <View
          style={{
            flex: 1,
            width: 100,
            height: 100,
            marginHorizontal: 20,
            flexGrow: 1
          }}
        />
        <View style={{ flex: 1, width: 100, height: 100 }} />
      </View>
    );
  }
}
