// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';

import Header       from '../Header';

import ProgressBar from './ProgressBar';
import Aesthetics  from './aesthetics/Aesthetics';
import Canvas      from './canvas/Canvas';
import Information from './information/Information';

import '../../styles/preferences.scss';

export default class PreferencesPage extends Component
{
  render() {
    return (
      <div id='preferences' className='page'>
        <Header/>
        <ProgressBar/>
        <Canvas      onFormUpdate={this.props.onFormUpdate}/>
        <Aesthetics  onFormUpdate={this.props.onFormUpdate}/>
        <Information onFormUpdate={this.props.onFormUpdate}
                     onFormSubmit={this.props.onFormSubmit}/>
      </div>
    );
  }
}

// PreferencesPage.propTypes = {}
