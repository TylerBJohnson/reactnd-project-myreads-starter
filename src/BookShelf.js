import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from "./BooksGrid";

class BookShelf extends React.Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={this.props.books} onBookChange={this.props.onBookChange} />
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onBookChange: PropTypes.func
}

export default BookShelf;