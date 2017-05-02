// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';

import Size  from './Size';
import Form  from './Form';
import Tones from './Tones';

export default class Canvas extends Component
{
	render() {
		return (
			<div className='canvas pref-section'>
				<span className='section-label'>Canvas</span>
				<Form  onFormUpdate={this.props.onFormUpdate}/>
				<Size  onFormUpdate={this.props.onFormUpdate}/>
				<Tones onFormUpdate={this.props.onFormUpdate}/>
			</div>
		);
	}
}

// PreferencesPage.propTypes = {}
