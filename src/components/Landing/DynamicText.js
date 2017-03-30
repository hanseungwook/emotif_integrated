import React, { Component } from 'react';

export default class DynamicText extends Component {


  render(){
    let dynamic_text = {
      base: 'Clothes should be ',
      endings: [
        'powerful',
        'emotional',
        'emotif'
      ]
    };
    return (
        <h2 className='dynamic-text'>
          Clothes should be 
          <b>
          {dynamic_text.endings[0]}
          </b>
        </h2>
    );
  }
}

DynamicText.propTypes = {
};
