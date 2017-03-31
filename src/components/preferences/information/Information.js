// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';



export default class Information extends Component {




  render() {
    const fields = [{ph: 'first name', type:'text',     id:'first-name'},
                    {ph: 'last  name', type:'text',     id:'last-name'},
                    {ph: 'email',      type:'email',    id:'email'},
                    {ph: 'password',   type:'password', id:'pw'},
                    {ph: 'password',   type:'password', id:'pw-comf'}];

    const input_items = fields.map((x,index) =>
      <div className='input-box'>
        <input id={x.id}
         key={'info' + index.toString()}
         className='pref-input'
         type={x.type}
         placeholder={x.ph}/>
      </div>
    )

    
    return (
      <div className='information section'>
      <span className='title'>Information</span>
         {input_items}
        <div id='submit'className='button'>Start Browsing</div>
      </div>
    );
  }
}

// PreferencesPage.propTypes = {}
