import React, { Component } from 'react';

export default class Values extends Component {
  constructor(props){
		super(props);
	}

  render(){
    let value_props = [
      'Clothes should complement the shape of your body',
      'Clothes should express your Identity',
      'Clothes should be made ethically',
      'Quality solely should determine price',
      'Designers should have complete creative freedom',
      'Customers should decide what clothes are produced',
    ];

    return (
      <div className='values'>
          <h3 className='value'> {value_props[0]} </h3>
          <h3 className='value'> {value_props[1]} </h3>
          <h3 className='value'> {value_props[2]} </h3>
          <h3 className='value'> {value_props[3]} </h3>
          <h3 className='value'> {value_props[4]} </h3>
          <h3 className='value'> {value_props[5]} </h3>
      </div>
    );
  }
}

Values.propTypes = {
  // value_props : PropTypes.array
}
