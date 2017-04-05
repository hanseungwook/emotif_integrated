// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';

import Selector from './Selector';
export default class Form extends Component
{
	render() {

		let form_options  = {
			type      : 'form',
			primary   : [2,4,6,8],
			secondary : 4
		};

		return (
      <div className='form sub-section'>
				<span className='subtitle'>Form</span>
				<Selector name='form' type={form_options.type} primary={form_options.primary}/>
			</div>
		);
	}
}

// PreferencesPage.propTypes = {}
