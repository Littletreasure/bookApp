import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default class AddBook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add Book</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  header: {
    marginTop: 60,
    padding: 10,
    fontSize: 35,
    marginBottom: 40
  }
});
