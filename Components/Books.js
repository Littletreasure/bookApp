import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AddBook from "./AddBook";

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
    type: null,
    clicked: false
  };
  handleAddPress = () => {
    console.log("clicked");
    this.setState({ clicked: true });
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
  handleAddBook = (title, author, type) => {
    console.log(title, author, type);
    if (type === "Got") {
      const newId = this.state.booksGot.length + 1;
      const newBook = { bookId: newId, Title: title, Author: author };
      this.setState(currentState => {
        return {
          booksGot: [...currentState.booksGot, newBook],
          clicked: false
        };
      });
    } else {
      const newId = this.state.booksWanted.length + 1;
      const newBook = { bookId: newId, Title: title, Author: author };
      this.setState(currentState => {
        return {
          booksWanted: [...currentState.booksWanted, newBook],
          clicked: false
        };
      });
    }
  };

  componentDidMount = () => {
    this.setState({ type: this.props.navigation.getParam("type") });
  };
  render() {
    const { booksGot, booksWanted, type, clicked } = this.state;
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
                  <View>
                    <TouchableOpacity>
                      <Text style={styles.cross}> x </Text>
                    </TouchableOpacity>
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
                  <View>
                    <TouchableOpacity>
                      <Text style={styles.cross}>x</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          )}
          <View style={styles.addBook}>
            <TouchableOpacity onPress={() => this.handleAddPress()}>
              <Text style={styles.addText}>Add Book</Text>
            </TouchableOpacity>
            {clicked ? (
              <View>
                <AddBook type={type} handleAddBook={this.handleAddBook} />
              </View>
            ) : null}
          </View>
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
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10
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
    fontSize: 15,
    paddingLeft: 5
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
  },
  cross: {
    color: "red",
    paddingLeft: 5
  },
  addBook: {
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  addText: {
    fontSize: 12,
    marginBottom: 20,
    padding: 5,
    borderColor: "black",
    borderWidth: 1
  }
});
