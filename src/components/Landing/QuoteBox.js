import React, { Component } from 'react';

export default class QuoteBox extends Component {
  constructor(props){
    super(props);

  }

  render(){
    let quote = {
      author  : 'Alber Ebaz',
      text    : ['Pure, intense emotions.',
                'It’s not about design.',
                'It’s about feelings.']
    };

    return (
        <div className='quote-box'>
          <p className='quote'>
          <span>{quote.text[0]}</span>
          <span>{quote.text[1]}</span>
          <span>{quote.text[2]}</span>
          <span className='author'>{quote.author}</span>
          </p>
      </div>
    );
  }
}

QuoteBox.propTypes = {
}
