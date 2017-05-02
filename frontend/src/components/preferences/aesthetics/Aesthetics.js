// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import Preferences from './Preferences';
import Styles 		 from './Styles';

export default class Aesthetics extends Component {

	render() {
		return (
			<div className='aesthetics pref-section'>
				<span className='section-label'>Aesthetics</span>
				<div className='quote'>“Style is a way to say who you are without having to speak.” — Rachel Zoe</div>
					<Preferences onFormUpdate={this.props.onFormUpdate}/>
					<Styles onFormUpdate={this.props.onFormUpdate}/>
			</div>
		);
	}
}

// PreferencesPage.propTypes = {}
