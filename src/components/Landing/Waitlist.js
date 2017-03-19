import React, { Component, PropTypes } from 'react';
//SUBCOMPONENTS
import WaitListBox from './WaitListBox';


export default
class WaitList extends Component {
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
    let definition: 'é·mo·tif /emɔtif/: (adj) evoking intense feeling and emotion.';
    return (
      <div className='pane'>

        <h2 className='definition'>
          {definition}
        </h2>

        <WaitListBox/>
      </div>
      </form>

    )
  }
}

WaitList.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
