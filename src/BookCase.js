import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import StartCase from 'lodash/startCase'

const BookCase = (props) => {
  return(
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Object.keys(props.shelves).map((key) => (
            <BookShelf onBookChange={props.onBookChange} key={key} title={StartCase(key)} books={props.shelves[key]} />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default BookCase