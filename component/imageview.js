// image should be shown as a modal
import React, { Component } from "react";
import { Modal, Text, TouchableHighlight, View, Alert } from "react-native";
import Images from "./image";
export default class Imageview extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Image  has been closed.");
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              {/* <Text>Pranavi</Text> */}
              {/* <Images /> */}

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Images />
                <Text> To Hide Image </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
