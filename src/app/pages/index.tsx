import React, { Component } from "react";
import { View } from "react-native";
import FormBanco from "../../components/FormBanco";

export default class home extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        {/* <Form /> */}
        {/* <FormLogin /> */}
        {/* <FormCar /> */}
        {/* <FormUser></FormUser> */}
        <FormBanco />
      </View>
    );
  }
}
