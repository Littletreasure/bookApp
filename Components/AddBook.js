import React, { Component } from "react";
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
    title: null,
    author: null,

    options: [
      { key: "got", text: "Got" },
      { key: "wanted", text: "Wanted" }
    ],
    value: null
  };

  handlePress = (title, author, value) => {
    console.log(title, author, value);
    Keyboard.dismiss();
  };

  render() {
    const { title, author, options, value } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add Book</Text>
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
          <View style={styles.container3}>
            {options.map(item => (
              <View key={item.key} style={styles.buttonContainer}>
                <Text>{item.text}</Text>
                <TouchableOpacity
                  style={styles.circle}
                  onPress={() => this.setState({ value: item.key })} // we set our value state to key
                >
                  {value === item.key && <View style={styles.checkedCircle} />}
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.handlePress(title, author, value)}
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
  header: {
    marginTop: 60,
    padding: 10,
    fontSize: 35,
    marginBottom: 40
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
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ACACAC",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5
  },
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#794F9B"
  }
});
