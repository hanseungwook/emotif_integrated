// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';

import Radio from '../Radio';
import Slider from '../Slider';
import Checkbox from '../Checkbox';

export default class Size extends Component
{
	render() {
    let height_units = ['cm','ft-in'];
    let weight_units = ['kg','lbs'];
    let top_size     = ['XS','S','M','L','XL', 'XXL'];
    let bra_size     = ['XS','S','M','L','XL', 'XXL'];
    let pants_waist  = ['XS','S','M','L','XL', 'XXL'];
    let pants_length = ['XS','S','M','L','XL', 'XXL'];

		return (
      <div className='size'>
				<span className='subtitle'>Size</span>
        <Slider    name='height'/>
        <Radio options={height_units}/>
        <Slider    name='weight'/>
        <Radio options={weight_units}/>
        <Checkbox name='top-size'     options={top_size}/>
        <Checkbox name='bra-size'     options={bra_size}/>
        <Checkbox name='pants-waist'  options={pants_waist}/>
        <Checkbox name='pants-length' options={pants_length}/>
			</div>
		);
	}
}

// PreferencesPage.propTypes = {}
