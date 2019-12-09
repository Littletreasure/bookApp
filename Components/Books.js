import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Books extends Component {
  state = {
    booksGot: [
      {
        bookId: 1,
        Title: "Pride & Prejudice",
        Author: "Jane Austen"
      },
      {
        bookId: 2,
        Title: "Little Women",
        Author: "Louisa May Alcott"
      },
      {
        bookId: 3,
        Title: "What Alice Forgot",
        Author: "Liane Moriaty"
      },
      {
        bookId: 4,
        Title: "Fairytale of New York",
        Author: "Miranda Dickinson"
      },
      {
        bookId: 5,
        Title: "A Place Called Here",
        Author: "Cecelia Ahern"
      }
    ],
    booksWanted: [
      {
        bookId: 1,
        Title: "The Love Detective",
        Author: "Alexandra Potter"
      },
      {
        bookId: 2,
        Title: "Act of Faith",
        Author: "Erica James"
      },
      {
        bookId: 3,
        Title: "The Other Half Lives",
        Author: "Sophie Hannah"
      },
      {
        bookId: 4,
        Title: "The Beach Hut",
        Author: "Veronica Henry"
      },
      {
        bookId: 5,
        Title: "I'll Take New York",
        Author: "Miranda Dickinson"
      }
    ],
    type: null
  };
  handlePress = input => {
    if (this.state.type === "Got") {
      const bookArray = [...this.state.booksGot];
      bookArray.sort((a, b) => a[input].localeCompare(b[input]));
      this.setState({ booksGot: [...bookArray] });
    } else {
      const bookArray = [...this.state.booksWanted];
      bookArray.sort((a, b) => a[input].localeCompare(b[input]));
      this.setState({ booksWanted: [...bookArray] });
    }
  };
  componentDidMount = () => {
    this.setState({ type: this.props.navigation.getParam("type") });
  };
  render() {
    const { booksGot, booksWanted, type } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Books {type}</Text>
        <View style={styles.booksContainer}>
          <View style={styles.books}>
            <View style={styles.textBox1}>
              <Text style={styles.text1}>Title</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handlePress("Title")}
              >
                <Text style={styles.buttonText}>sort</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textBox1}>
              <Text style={styles.text1}>Author</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handlePress("Author")}
              >
                <Text style={styles.buttonText}>sort</Text>
              </TouchableOpacity>
            </View>
          </View>

          {type === "Got" ? (
            <View>
              {booksGot.map(book => (
                <View style={styles.books} key={book.bookId}>
                  <View style={styles.textBox}>
                    <Text style={styles.text}>{book.Title}</Text>
                  </View>
                  <View style={styles.textBox}>
                    <Text style={styles.text}>{book.Author}</Text>
                  </View>
                </View>
              ))}
            </View>
          ) : (
            <View>
              {booksWanted.map(book => (
                <View style={styles.books} key={book.bookId}>
                  <View style={styles.textBox}>
                    <Text style={styles.text}>{book.Title}</Text>
                  </View>
                  <View style={styles.textBox}>
                    <Text style={styles.text}>{book.Author}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
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
    marginTop: 40,
    padding: 10,
    fontSize: 35,
    marginBottom: 20
  },
  booksContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10
  },
  books: {
    flexDirection: "row",
    justifyContent: "center"
  },
  textBox: {
    justifyContent: "flex-start",
    width: "50%",
    borderColor: "pink",
    borderWidth: 1
  },
  textBox1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "50%",
    paddingTop: 5,
    paddingBottom: 5
  },
  text: {
    fontSize: 15
  },
  text1: {
    fontSize: 20
  },
  button: {
    backgroundColor: "grey",
    marginLeft: 10,
    height: "65%",
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 15,
    color: "white"
  }
});
