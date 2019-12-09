import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default class BooksGot extends Component {
  state = {
    books: [
      { bookId: 1, Title: "Pride & Prejudice", Author: "Jane Austen" },
      { bookId: 2, Title: "Little Women", Author: "Louisa May Alcott" },
      { bookId: 3, Title: "What Alice Forgot", Author: "Liane Moriaty" },
      {
        bookId: 4,
        Title: "Fairytale of New York",
        Author: "Miranda Dickinson"
      },
      { bookId: 5, Title: "A Place Called Here", Author: "Cecelia Ahern" }
    ]
  };
  render() {
    const { books } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Books Got</Text>
        <View style={styles.bookContainer}>
          {books.map(book => (
            <View style={styles.books}>
              <Text key={book.bookId}>{book.Title}</Text>
              <Text>{book.Author}</Text>
            </View>
          ))}
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
  bookContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  books: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
