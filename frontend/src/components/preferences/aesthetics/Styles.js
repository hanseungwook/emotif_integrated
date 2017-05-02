// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import Radio from '../Radio';

export default class Styles extends Component
{
	render() {
		let style_opt = ['Elegant', 'Street'];

		// let music_opt = ['EDM', 'HIPHOP', 'COUNTRY', 'RAP', 'POP', 'TOP 40', 'INDIE',
		// 								 'ALTERNATIVE', 'ROCK','REGGAE', 'BLUES', 'WHATEVER MY FRIENDS LISTEN TO'];

		return (
			<div className='pref-subsection'>
				<span className='subsection-label'>Style</span>
				<Radio name='styles'       options={style_opt}
																	 type='style'
																	 onFormUpdate={this.props.onFormUpdate}/>

			</div>
		);
	}
}

// PreferencesPage.propTypes = {}
