// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import InputBox from './InputBox';


export default class Information extends Component {


  render() {
    const fields = [{ph: 'first name', type:'text',     id:'firstName'},
                    {ph: 'last  name', type:'text',     id:'lastName'},
                    {ph: 'email',      type:'email',    id:'email'},
                    {ph: 'password',   type:'password', id:'pw'},
                    {ph: 'password',   type:'password', id:'pw-comf'}];

    const input_items = fields.map((x,index) =>
      <InputBox
          onFormUpdate={this.props.onFormUpdate}
          key={'information' + index.toString()}
          id={x.id}
          type={x.type}
          ph={x.ph}
      />
    )


    return (
      <div className='information pref-section'>
      <span className='section-label'>Information</span>
         {input_items}
        <div id='submit'className='pref-button' onClick={()=>this.props.onFormSubmit}
        >Start Browsing</div>
      </div>
    );
  }
}

// PreferencesPage.propTypes = {}
