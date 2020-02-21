import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import AddBook from "./AddBook";
import axios from "axios";

export default class Books extends Component {
  state = {
    books: [],
    sort_by: "author",
    order: "asc",
    isLoading: true,
    type: null,
    clicked: false
  };
  handleAddPress = () => {
    this.setState({ clicked: true });
  };
  handleDelPress = id => {
    const type = this.state.type;
    axios
      .delete(
        `https://ruths-collection-app.herokuapp.com/api/books${type}/${id}`
      )
      .then(response => {
        this.setState(currentState => {
          const newArray = currentState.books.filter(book => {
            return book.book_id !== id;
          });
          return { books: newArray };
        });
      });
  };
  handlePress = input => {
    const bookArray = [...this.state.books];
    bookArray.sort((a, b) => a[input].localeCompare(b[input]));
    this.setState({ books: [...bookArray] });
  };
  handleAddBook = book => {
    this.setState(currentState => {
      return { books: [book, ...currentState.books], clicked: false };
    });
  };

  componentDidMount = () => {
    const type = this.props.navigation.getParam("type");
    axios
      .get(`https://ruths-collection-app.herokuapp.com/api/books${type}`)
      .then(books => {
        this.setState({
          books: books.data.books,
          isLoading: false,
          type: type
        });
      });
  };
  render() {
    const { books, isLoading, clicked, type } = this.state;
    const screenHeight = Dimensions.get("window").height;
    return (
      <View style={{ flex: 1, height: screenHeight }}>
        <ScrollView
          showsVerticalScrollIndicator={true}
          contentContainerStyle={styles.container}
        >
          <Text style={styles.header}>Books {type}</Text>
          <View style={styles.booksContainer}>
            <View style={styles.books}>
              <View style={styles.textBox1}>
                <Text style={styles.text1}>Title</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.handlePress("title")}
                >
                  <Text style={styles.buttonText}>sort</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.textBox1}>
                <Text style={styles.text1}>Author</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.handlePress("author")}
                >
                  <Text style={styles.buttonText}>sort</Text>
                </TouchableOpacity>
              </View>
            </View>
            {isLoading ? (
              <View>
                <Text>loading ...</Text>
              </View>
            ) : (
              <View>
                {books.map(book => (
                  <View style={styles.books} key={book.book_id}>
                    <View style={styles.textBox}>
                      <Text style={styles.text}>{book.title}</Text>
                    </View>
                    <View style={styles.textBox}>
                      <Text style={styles.text}>{book.author}</Text>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Text
                          style={styles.cross}
                          onPress={() => this.handleDelPress(book.book_id)}
                        >
                          x
                        </Text>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    marginTop: 20,
    padding: 10,
    fontSize: 35,
    marginBottom: 20
  },
  booksContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 10,
    marginBottom: 350
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
    height: "66%",
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 15,
    color: "white"
  },
  cross: {
    color: "red",
    fontSize: 15,
    paddingLeft: 5
  },
  addBook: {
    paddingTop: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  addText: {
    fontSize: 15,
    marginBottom: 20,
    padding: 5,
    borderColor: "black",
    borderWidth: 1
  }
});
