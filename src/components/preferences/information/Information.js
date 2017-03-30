// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';



export default class Information extends Component {

	render() {
		return (
			<div>
				<span className='title'>Information</span>
				<input className='pref-input'  type='text' placeholder='first name'/>
				<input className='pref-input' type='text' placeholder='last name'/>
				<input className='pref-input' type='text' placeholder='email'/>
				<input className='pref-input' type='text' placeholder='password'/>
				<input className='pref-input' type='text' placeholder='password'/>
				<div id='submit'className='button'>Start Browsing</div>
			</div>
		);
	}
}

// PreferencesPage.propTypes = {}
