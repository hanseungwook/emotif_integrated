import React, { Component, PropTypes } from 'react';

export default
class WaitListBox extends Component {
  constructor(props){
		super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    console.log('name and email: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    let dynamic_text = {
      base: Clothes should be,
      endings: [
        'powerful',
        'emotional',
        'emotif'
      ]
    }

    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <DynamicText {dynamic_text}/>
              <input type='text'>
              <input type='email'>
            <button>Join The Movement<button/>
            <div></div>
          </form>
        </div>
    );
  }
}

WaitListBox.propTypes = {
  dynamic_text: PropTypes.obj.isRequired
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
