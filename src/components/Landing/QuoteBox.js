import React, { Component, PropTypes } from 'react';

export default
class QuoteBox extends QuoteBox {
  render(){
    return (
        <div className='quote-box'>
          <p className="quote">{this.quote.text}</p>
        <h4 className='author'>{this.quote.author}</h4>
      </div>
    )
  }
}

QuoteBox.propTypes = {
  quote: React.PropTypes.object
}
