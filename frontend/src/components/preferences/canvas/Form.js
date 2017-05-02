// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';

import Selector from './Selector';
export default class Form extends Component
{
  render() {

    let form_options  = {
      type      : 'shape',
      primary   : [2,4,7],
      secondary : 3,
      label     :'choose the body shape most similar to yours'
    };

    return (
      <div className='form sub-section'>
        <span className='subsection-label'>Form</span>
        <div className='quote'>
          "The dress must follow the body of a woman, not the body following the shape of the dress."
          - Hubert De Givenchy
        </div>

        <Selector name='form' type={form_options.type}
                              primary={form_options.primary}
                              secondary={form_options.secondary}
                              label={form_options.label}
                              onFormUpdate={this.props.onFormUpdate}
        />

      </div>
    );
  }
}

// PreferencesPage.propTypes = {}
