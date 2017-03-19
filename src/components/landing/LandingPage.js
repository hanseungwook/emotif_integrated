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
        <Header/>
        <Panes onWaitlistClick={this.props.onWaitlistClick}/>
      </div>
		);
	}
}

LandingPage.propTypes = {
	onWaitlistClick: PropTypes.func.isRequired,
	errorMessage   : PropTypes.string
}
