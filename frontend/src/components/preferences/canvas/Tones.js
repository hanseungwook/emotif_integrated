// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';

import Selector from './Selector';

export default class Tones extends Component {

  render() {
    let skin_options  = {
      type      : 'skin',
      primary   : [3,9,15,21,27,33],
      secondary : 6,
      label     : 'Which skin tone is closest to your own?'
    };

    let eye_options   = {
      type      : 'eye',
      primary   : [2,4,6],
      secondary : 2,
      label     : 'Which eye color is closest to your own?'
    };

    let hair_options  = {
      type      : 'hair',
      primary   : [2,4,6],
      secondary : 3,
      label     : 'Which hair color is closest to your own?'
    };

    return (
      <div className='tones sub-section'>
        <span className='subsection-label'>Tones</span>
        <div className='quote'>"I like light, color, luminosity. I like things full of color and vibrant." - Oscar De La Renta</div>

        <Selector  key='skincolor'
                   name='SkinColor'
                   type      = {skin_options.type}
                   primary   = {skin_options.primary}
                   secondary = {skin_options.secondary}
                   label     = {skin_options.label}
                   onFormUpdate={this.props.onFormUpdate}
        />
        <Selector  key='eyecolor'
                   name='EyeColor'
                   type       = {eye_options.type}
                   primary   = {eye_options.primary}
                   secondary = {eye_options.secondary}
                   label     = {eye_options.label}
                   onFormUpdate={this.props.onFormUpdate}

        />
        <Selector key='haircolor'
                  name='HairColor'
                  type       = {hair_options.type}
                  primary   = {hair_options.primary}
                  secondary = {eye_options.secondary}
                  label     = {eye_options.label}
                  onFormUpdate={this.props.onFormUpdate}

        />
      </div>
    );
  }
}

// PreferencesPage.propTypes = {}
