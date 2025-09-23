import React, { Component } from "react";
import { View } from "react-native";
import FormCar from "../components/FormCar";

export default class home extends Component {
  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        {/* <Form /> */}
        {/* <FormLogin /> */}
        <FormCar />
      </View>
    );
  }
}
