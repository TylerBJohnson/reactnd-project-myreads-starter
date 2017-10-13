import React from 'react'
import { Link } from 'react-router-dom'
import Debounce from 'lodash/debounce'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'
class BookSearch extends React.Component {
  state = {
    query: '',
    results: []
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      if(nextProps.books) {
        this.mergeResultsWithBooks(this.state.results, nextProps.books)
      }
    }
  }

  search = Debounce(() => {
    if(this.state.query.length > 0){
      BooksAPI.search(this.state.query.trim(), 20).then((results) => {
        if(Array.isArray(results)){
          this.mergeResultsWithBooks(results, this.props.books);
          this.setState({results})
        }else{
          // Since the service sends back an error object, and does not actually throw an error when the query is invalid
          // We need to handle that case as well
          this.setState({results: []})
        }
      }).catch((e) => {
        this.setState({results: []})
      })
    }else{
      this.setState({results: []})
    }
  }, 200)

  mergeResultsWithBooks = (results, books) => {
    if(results === undefined || books === undefined){
      return;
    }

    var bookMap = {};
    books.forEach((book) => {
      bookMap[book.id] = book;
    });

    results.forEach((result) => {
      let book = bookMap[result.id]
      if(book){
        result['shelf'] = book['shelf']
      }
    })
  }

  handleQueryChange = (e) => {
    this.setState({query: e.target.value}, () => this.search())
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.handleQueryChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={this.state.results} onBookChange={this.props.onBookChange}/>
        </div>
      </div>
    )
  }
}

export default BookSearch