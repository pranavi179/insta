import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import Imageview from "./component/imageview";
import Mainpage from "./component/Mainscreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import ITitle from "./component/title";

// import { Card } from "react-native-paper";
// import Topbar from "./component/topbar.js";
// import FooterBar from "./component/footer";
// import Layout from "./component/layout";

function App() {
  return (
    <AppStackNavigator />

    //  <View style={styles.container}>
    //  <View>
    //   <Text>Hey pranavi!</Text>
    //    <View style={{ width: 100, height: 100, backgroundColor: "powderblue" }}>
    //      <Card>
    //       <Imageview />
    //       <Image
    //         source={require("./images/elon.jpg")}
    //         style={{ width: 100, height: 100 }}
    //       />
    //     </Card>

    //   </View>
    //     <Layout />

    //    <AppStackNavigator />
    //    <Imageview />
    //   <Topbar />
    //   <Mainpage />
    //    <FooterBar />
    //  </View>
  );
}
const AppStackNavigator = createStackNavigator({
  Main: {
    screen: Mainpage
  }
});

export default createAppContainer(AppStackNavigator);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#B3447E",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
