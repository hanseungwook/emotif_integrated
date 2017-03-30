import React, { Component, PropTypes } from 'react';
import WaitlistBox from './WaitlistBox';

export default class Waitlist extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let definition = 'é·mo·tif /emɔtif/: (adj) evoking intense feeling and emotion.';
    return (
      <div className='pane'>
        <h2 className='definition'>
          {definition}
        </h2>
        <WaitlistBox onWaitlistClick={this.props.onWaitlistClick}/>
      </div>
    );
  }
}

Waitlist.propTypes = {
  onWaitlistClick: PropTypes.func.isRequired,
};
