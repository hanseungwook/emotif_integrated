// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import Checkbox from '../Checkbox';
import Radio from '../Radio';

export default class Preferences extends Component{

	render() {
    let fem_mas  = ['very feminine' , 'feminish', 'androgynous', 'masculine', 'very masculine'];
    let min_max  = ['minimalist'   , 'minimalist-ish','in between','complex-ish', 'complex'];
    let mon_pol  = ['muted', 'muted-ish', 'in between','loud-ish','loud'];
    let rig_fle  = ['rigid' , 'flexible'];
		return (
			<div className='pref-subsection'>
                <span className='subsection-label'>Preferences</span>
                <Checkbox name='pref1'
                    options={fem_mas}
                    type='pref'
                    onFormUpdate={this.props.onFormUpdate}
                    />
                <Checkbox name='pref2'
                    options={min_max}
                    type='pref'
                    onFormUpdate={this.props.onFormUpdate}
                    />
                <Checkbox name='pref3'
                    options={mon_pol}
                    type='pref'
                    onFormUpdate={this.props.onFormUpdate}
                    />
                <Radio name='pref4'
                    options={rig_fle}
                    type='pref'
                    onFormUpdate={this.props.onFormUpdate}
                    />
			</div>
		);
	}
}

// PreferencesPage.propTypes = {}
