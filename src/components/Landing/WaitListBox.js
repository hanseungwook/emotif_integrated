import React, { Component, PropTypes } from 'react';
import DynamicText from './DynamicText';

export default class WaitlistBox extends Component {
  constructor(props){
		super(props);
    this.onWaitlistClick = this.handleSubmit.bind(this);
	}

  handleChange() {
    // this.setState({value: event.target.value});
  }

  handleSubmit() {
    // console.log('name and email: ' + this.state.value);
    // const name = this.refs.name.getValue().trim();
    // const user = this.refs.email.getValue().trim();
    // const creds = {email: user};
    // this.props.onWaitlistClick(creds);
    // event.preventDefault();
  }

  render(){
    let call_to_action = 'Join The Movement';
    return (
        <div className='waitlist-box'>
            <DynamicText/>
              <input className='waitlist-input' ref='email' type='text'
              placeholder='email'/>
              <div className='waitlist-button' onClick={this.handleSubmit()} >
              <span>{call_to_action}</span>
              </div>
        </div>
    );
  }
}
WaitlistBox.propTypes = {
  onWaitlistClick: PropTypes.func.isRequired,
}
