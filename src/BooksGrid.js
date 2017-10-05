import React from 'react'
import PropTypes from 'prop-types'
import BookCard from './BookCard'

class BooksGrid extends React.Component {
  render() {
    return(
      <ol className="books-grid">
        {this.props.books.map((book) => (
          <li key={book.id}>
            <BookCard
              book={book}
              onBookChange={this.props.onBookChange}
            />
          </li>
        ))}
      </ol>
    )
  }
}

BooksGrid.propTypes = {
  books: PropTypes.array,
  onBookChange: PropTypes.func
}

BooksGrid.defaultProps = {
  books: []
}

export default BooksGrid;
