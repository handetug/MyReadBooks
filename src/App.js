import React from 'react'
import './App.css'
import BookList from './BookList.js';
import Search from './Search.js';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    books: [],

  }

  componentDidMount() {
    this.getAllBooks();
  }


  //get all library on page
  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      });
    });
  }

  
//update when shelf changes.
  handleShelfChange = (bookId, shelf) => {
    BooksAPI.get(bookId).then((book) => {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(previousState => ({
          books: previousState.books.filter(b => b.id !== book.id).concat([book])
        }))
      });
    });
  }


  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={() => (
              <BookList
                currentlyReading={this.state.books.filter(book => book.shelf === "currentlyReading")}
                wantToRead={this.state.books.filter(book => book.shelf === "wantToRead")}
                read={this.state.books.filter(book => book.shelf === "read")}
                ShelfChange={this.handleShelfChange}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search
                shelfBooks={this.state.books}
                ShelfChange={this.handleShelfChange}
              />
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp
