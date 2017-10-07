import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookCase from './BookCase'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelves: {
      read: [],
      currentlyReading: [],
      wantToRead: []
    },
    books: {}
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    let shelves = {
      read: [],
      currentlyReading: [],
      wantToRead: []
    }

    BooksAPI.getAll().then((books) => {
      books.forEach((book) => {
        shelves[book.shelf].push(book)
      });
      this.setState({shelves, books})
    });
  }

  onBookChange = () => {
    this.getBooks();
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <BookSearch books={this.state.books} onBookChange={this.onBookChange}/>
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <BookCase shelves={this.state.shelves} onBookChange={this.onBookChange}/>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
