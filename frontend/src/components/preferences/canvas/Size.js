// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import Radio from '../Radio';
// import Slider from '../Slider';
import Checkbox from '../Checkbox';

export default class Size extends Component {

  render() {
    // let height_units = ['ft-in','cm'];
    // let weight_units = ['lbs','kg'];
    let top_size     = {
      options: ['XS','S','M','L','XL'],
      label:  'choose the size(s) you wear for tops'
    }

    // let bra_size     = {
    //   options : ['XS','S','M','L','XL'],
    //   label   : 'choose the bra size(s) you wear'
    // }
    let pants_waist  = {
      options : ['XS','S','M','L','XL'],
      label   : 'choose the waist size(s) you wear for pants'
    }
    let pants_length = {
      options: ['XS','S','M','L','XL'],
      label   :'choose the length size(s) you wear for pants'
    }

    return (
      <div className='size sub-section'>
        <span className='subsection-label'>Size</span>

        <Checkbox    key='top'
                     name='top'
                     options={top_size.options}
                     type='checkbox'
                     label={top_size.label}
                     onFormUpdate={this.props.onFormUpdate}/>

        <Checkbox    key='bottomWaist'
                     name='bottomWaist'
                     options={pants_waist.options}
                     type='checkbox'
                     label={pants_waist.label}
                     onFormUpdate={this.props.onFormUpdate}/>

        <Checkbox    key='bottomLength'
                     name='bottomLength'
                     options={pants_length.options}
                     type='checkbox'
                     label={pants_length.label}
                     onFormUpdate={this.props.onFormUpdate}/>
      </div>
    );
  }
}

// PreferencesPage.propTypes = {}
