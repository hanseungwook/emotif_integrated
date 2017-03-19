import React, { Component, PropTypes } from 'react';
import ImageBox from './ImageBox';

export default
class Header extends Component {
  render(){
    <div className="Header">
      <div id="center"> emotif</div>
      <div id="left">   manifesto</div>
      <div id="right">  designers</div>
    </div>
  }
}


Header.propTypes = {
  onWaitlistClick: PropTypes.func.isRequired,
  onWaitlistClick: PropTypes.func.isRequired,

}
