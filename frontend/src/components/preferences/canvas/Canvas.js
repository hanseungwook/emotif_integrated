// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';

import Size  from './Size';
import Form  from './Form';
import Tones from './Tones';

export default class Canvas extends Component
{
	render() {
		return (
			<div className='canvas section'>
				<span className='title'>Canvas</span>
				<Size/>
				<Form/>
				<Tones/>
			</div>
		);
	}
}

// PreferencesPage.propTypes = {}
