import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import Homepage from "./home";
import Searchpage from "./search";
import Profilepage from "./profile";

import { createAppContainer } from "react-navigation";
import {
  createBottomTabNavigator,
  MaterialTopTabBar
} from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

class Mainpage extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />
  };
  render() {
    return (
      // <View>
      //   <Text>Gotcha</Text>
      <AppTabNavigator />
      // </View>
      // // <AppTabNavigator />
    );
  }
}



const AppTabNavigator = createBottomTabNavigator({
  Home: { screen: Homepage },
  Search: { screen: Searchpage },
  Profile: { screen: Profilepage }
});

export default createAppContainer(AppTabNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
