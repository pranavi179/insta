import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import Imageview from "./component/imageview";'

// import { Card } from "react-native-paper";
import Topbar from "./component/topbar.js";
// import Layout from "./component/layout";

export default function App() {
  return (
    // <View style={styles.container}>
    <View>
      <Text>Hey pranavi!</Text>
      {/* <View style={{ width: 100, height: 100, backgroundColor: "powderblue" }}>
         <Card>
          {/* <Imageview /> 
          <Image
            source={require("./images/elon.jpg")}
            style={{ width: 100, height: 100 }}
          />
        </Card> */}

      {/* </View> 
      <Layout />*/}
      <Topbar />
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
