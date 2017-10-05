import React from 'react'
import PropTypes from 'prop-types'
import BookActionMenu from './BookActionMenu'
import Get from 'lodash/get'

class BookCard extends React.Component {

  getBackgroundUrl = () => {
    const thumbnailLink = Get(this.props.book, 'imageLinks.thumbnail', '')
    return 'url(' + thumbnailLink + ')';
  }

  render() {
    const { book } = this.props
    return(
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: this.getBackgroundUrl()}}></div>
            <BookActionMenu book={book} onBookChange={this.props.onBookChange}/>
          </div>
          <div className="book-title">{Get(book, 'title', '')}</div>
          <div className="book-authors">{Get(book, 'authors', []).map((author) => (author))}</div>
        </div>
      </div>
    )
  }
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onBookChange: PropTypes.func
}

export default BookCard;