// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';

import Radio from '../Radio';
// import Slider from '../Slider';
import Checkbox from '../Checkbox';

export default class Size extends Component {






  render() {
    let height_units = ['ft-in','cm'];
    let weight_units = ['lbs','kg'];
    let top_size     = ['XS','S','M','L','XL', 'XXL'];
    let bra_size     = ['XS','S','M','L','XL', 'XXL'];
    let pants_waist  = ['XS','S','M','L','XL', 'XXL'];
    let pants_length = ['XS','S','M','L','XL', 'XXL'];

    return (
      <div className='size sub-section'>
        <span className='subtitle'>Size</span>
        <div className='input-box'>
          <input className='pref-input' placeholder='height'/>
          <Radio options={height_units}/>
        </div>
        <div className='input-box'>
          <input className='pref-input' placeholder='weight'/>
          <Radio options={weight_units}/>
        </div>
        <Checkbox name='top  size'     options={top_size}/>
        <Checkbox name='bust size'     options={bra_size}/>
        <Checkbox name='pants waist'  options={pants_waist}/>
        <Checkbox name='pants length' options={pants_length}/>
      </div>
    );
  }
}

// PreferencesPage.propTypes = {}
