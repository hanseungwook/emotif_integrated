import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Panes  from './Panes';


import '../../styles/landing.scss';


export default class LandingPage extends Component
{


	render() {
		// const { errorMessage } = this.props;
		return (
      <div className='page'>
        <Header onSwitchPane={this.props.onSwitchPane}/>
        <Panes onWaitlistClick={this.props.onWaitlistClick}
               onSwitchPane={this.props.onSwitchPane}
               paneId      ={this.props.paneId}
        />
      </div>
		);
	}
}

LandingPage.propTypes = {
	onWaitlistClick : PropTypes.func.isRequired,
  onDesignersClick: PropTypes.func.isRequired,
  onSwitchPane    : PropTypes.func.isRequired,
  paneId          : PropTypes.number.isRequired,
	errorMessage    : PropTypes.string
}
