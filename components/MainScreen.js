import React from "react";
import { StyleSheet, Text, View,Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>MainScreen</Text>
      <Button onPress = {() => {props.navigation.navigate("profile")}}
      title = "GO to profile"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B3447E",
    alignItems: "center",
    justifyContent: "center"
  }
});