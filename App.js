import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Ruth's Books</Text>
        <Text style={styles.newBook}>Add New Book</Text>
        <Text style={styles.list}>Books Got</Text>
        <Text style={styles.list}>Books Wanted</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
    backgroundColor: "#F5FCFF"
  },
  header: {
    padding: 10,
    fontSize: 35,
    marginBottom: 40
  },
  newBook: {
    marginTop: 20,
    padding: 10,
    fontSize: 20
  },
  list: {
    marginTop: 20,
    padding: 10,
    fontSize: 20
  }
});
