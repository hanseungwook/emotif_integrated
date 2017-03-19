import React, { Component, PropTypes } from 'react';
import Hero from './Hero';
import Manifesto from './Manifesto';
import Waitlist from './Waitlist';

export default class Panes extends Component
{
  render()
  {
    return (
      <div>
        <Hero/>
        <Manifesto/>
        <Waitlist onWaitlistClick={this.props.onWaitlistClick}/>
      </div>
    );
  }
}

Panes.propTypes = {
  onWaitlistClick: PropTypes.func.isRequired,
};
