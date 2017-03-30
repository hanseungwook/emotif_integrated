import React, { Component } from 'react';
import QuoteBox from './QuoteBox';
import Values from './Values';

export default class Manifesto extends Component
{
  render(){
    return (
      <div className='pane'>
        <QuoteBox/>
        <Values/>
      </div>
    );
  }
}


Manifesto.propTypes = {
};
