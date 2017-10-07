import React from 'react'
import PropTypes from 'prop-types'

class StarBar extends React.Component {
  stars = () => {
    let stars = [];
    let fullStars = Math.floor(this.props.stars)
    let hasPartial = (this.props.stars % 1) >= .5
    for(let i = 0; i < fullStars; i ++) {
      stars.push(
        <i key={i} className="fa fa-star" aria-hidden="true"></i>
      )
    }
    if(hasPartial === true) {
      stars.push(
        <i key={stars.length} className="fa fa-star-half-o" aria-hidden="true"></i>
      )
    }
    while(stars.length < 5){
      stars.push(
        <i key={stars.length} className="fa fa-star-o" aria-hidden="true"></i>
      )
    }
    return stars;
  }

  render() {
    return(
      <div className="star-bar">
        {this.stars()}
        {this.props.totalRatings && <div className="star-bar-message">{this.props.totalRatings} ratings</div>}
      </div>
    )
  }
}

StarBar.propTypes = {
  stars: PropTypes.number.isRequired,
  totalRatings: PropTypes.number
}

export default StarBar