import React, { Component } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";

export default class AddBook extends Component {
  state = {
    title: "",
    author: ""
  };

  handlePress = (title, author, type) => {
    axios
      .post(`https://ruths-collection-app.herokuapp.com/api/books${type}`, {
        title: title,
        author: author
      })
      .then(book => {
        this.setState({ title: "", author: "" });
        this.props.handleAddBook(book.data.book);
        Keyboard.dismiss();
      });
  };

  render() {
    const { title, author } = this.state;
    const { type } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({ title: text });
            }}
            value={title}
          />
          <TextInput
            style={styles.input}
            placeholder="Author"
            placeholderTextColor="grey"
            autoCapitalize="none"
            onChangeText={text => {
              this.setState({ author: text });
            }}
            value={author}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.handlePress(title, author, type)}
          >
            <Text style={styles.submitButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
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

  container2: {
    flexDirection: "column"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 35,
    width: 200,
    paddingLeft: 10,
    color: "black",
    marginBottom: 10
  },
  submitButton: {
    backgroundColor: "black",
    alignSelf: "center",
    padding: 10,
    height: 35,
    width: 90
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 15
  },
  container3: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
