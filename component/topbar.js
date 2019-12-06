// contains profile avatar in circles
// if we click on it new image shopuld be shown as  a modal
import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Avatar } from "react-native-elements";
export default class Topbar extends Component {
  render() {
    return (
      // <View
      //   style={{
      //     flex: 1,
      //     width: 500,
      //     height: 1000,
      //     justifyContent: "space-evenly",
      //     alignItems: "flex-start",
      //     alignContent: "space-between",
      //     padding: 20,
      //     // borderTopWidth: 5,
      //     borderBottomWidth: 20,
      //     flexWrap: "wrap"
      //   }}
      // >
      //   <View
      //     style={{
      //       flex: 1,
      //       width: 100,
      //       height: 100,
      //       marginHorizontal: 20,
      //       flexGrow: 1
      //     }}
      // >
      <View>
        <ScrollView>
          <Avatar
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }}
          />
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    // justifyContent: "center",
    padding: 10
  }
});
