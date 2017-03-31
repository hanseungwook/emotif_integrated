// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';

import Preferences from './Preferences';
import Styles 		 from './Styles';

export default class Aesthetics extends Component {

	render() {
		return (
			<div className='aesthetics section'>
				<span className='title'>Aesthetics</span>
				<Preferences/>
				<Styles/>
			</div>
		);
	}
}

// PreferencesPage.propTypes = {}
