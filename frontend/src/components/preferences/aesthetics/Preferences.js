// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import Checkbox from '../Checkbox';

export default class Preferences extends Component{

	render() {
    let fem_mas  = ['feminine'     , '', 'masculine'];
    let min_max  = ['minimalist'   , '', 'maximalist'];
    let mon_pol  = ['monochromatic', '', 'polychromatic'];
    let rig_fle  = ['rigid'        , '', 'flexible'];
		return (
			<div>
        <Checkbox name='feminine-masculine'    options={fem_mas}/>
        <Checkbox name='minimalist-maximalist' options={min_max}/>
        <Checkbox name='monochrome-polychrome' options={mon_pol}/>
        <Checkbox name='rigid-flexible'        options={rig_fle}/>
			</div>
		);
	}
}

// PreferencesPage.propTypes = {}
