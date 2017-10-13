import React from 'react';
import PropTypes from 'prop-types'
import Get from 'lodash/get'

class BookActionMenu extends React.Component {

  onSelectAction = (e) => {
    if(this.props.onBookChange){
      this.props.onBookChange(this.props.book, e.target.value)
    }
  }

  render() {
    const { book } = this.props
    const shelf = Get(book, 'shelf', 'none')
    return(
      <div>
        <div className="book-shelf-changer">
          <select value={shelf} onChange={this.onSelectAction}>
            <option disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    )
  }
}

BookActionMenu.propTypes = {
  book: PropTypes.object.isRequired,
  onBookChange: PropTypes.func
}

export default BookActionMenu;