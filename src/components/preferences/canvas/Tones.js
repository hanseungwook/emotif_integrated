// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';

import Selector from './Selector';

export default class Tones extends Component {

  render() {
    let skin_options  = {
      type      : 'skin',
      primary   : [3,9,15,21,27,33],
      secondary : 6
    };

    let eye_options   = {
      type      : 'eye',
      primary   : [2,4,6],
      secondary : 2
    };

    let hair_options  = {
      type      : 'hair',
      primary   : [2,4,6],
      secondary : 3
    };

    return (
      <div className='tones sub-section'>
        <span className='subtitle'>Tones</span>
        <Selector name='SkinColor' type       = {skin_options.type}
                                   primary   = {skin_options.primary}
                                   secondary = {skin_options.secondary}
        />
        <Selector name='EyeColor'  type       = {eye_options.type}
                                   primary   = {eye_options.primary}
                                   secondary = {eye_options.secondary}
        />
        <Selector name='HairColor' type       = {hair_options.type}
                                   primary   = {hair_options.primary}
                                   secondary = {eye_options.secondary}
        />
      </div>
    );
  }
}

// PreferencesPage.propTypes = {}
