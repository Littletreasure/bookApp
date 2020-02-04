import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AddBook from "./Components/AddBook";
import Books from "./Components/Books";

class App extends Component {
  onPress = num => {
    let window;
    let props;
    if (num === 1) window = "AddBook";
    else if (num === 2) {
      window = "Books";
      props = "Got";
    } else {
      window = "Books";
      props = "Wanted";
    }
    this.props.navigation.navigate(window, { type: props });
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("./books3.jpg")}
        >
          <Text style={styles.header}>Ruth's Books</Text>
          <Text style={styles.newBook} onPress={() => this.onPress(1)}>
            Add New Book
          </Text>
          <Text style={styles.list} onPress={() => this.onPress(2)}>
            Books Got
          </Text>
          <Text style={styles.list} onPress={() => this.onPress(3)}>
            Books Wanted
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  AddBook,
  Books
});

const AppContainer = createAppContainer(AppNavigator);

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
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 60
  }
});

export default AppContainer;
