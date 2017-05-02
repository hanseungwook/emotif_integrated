import React, { Component } from 'react';

export default class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value});
    console.log(e.target.value);
    this.props.onFormUpdate({id:e.target.id, value:e.target.value});
  }

  render() {
    return (
      <div className='input-box' >
        <input id={this.props.id}
               ref={this.props.id}
               className='pref-input'
               type={this.props.type}
               placeholder={this.props.ph}
               onChange={(e)=>this.handleChange(e)}/>
      </div>
    );
  }
}

// PreferencesPage.propTypes = {}
