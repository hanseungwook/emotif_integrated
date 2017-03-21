import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { joinWaitlist, switchPane } from './landingActions';
import LandingPage from '../../components/landing/LandingPage';

export class LandingContainer extends Component {

	render()
	{
		if (this.props.isAuthenticated){
			return (
				<LandingPage
					onWaitlistClick = {this.props.onWaitlistClick}
				/>
			);
		} else {
			return (
				<LandingPage
					onWaitlistClick = {this.props.onWaitlistClick}
					onSwitchPane 		= {this.props.onSwitchPane}
					paneId					= {this.props.paneId}
				/>
			);
		}
	}
}

LandingContainer.propTypes = {
	onWaitlistClick: PropTypes.func.isRequired,
	onSwitchPane	 : PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
	paneId				 : PropTypes.number.isRequired,
  errorMessage   : PropTypes.string
};

const mapStateToProps = (state) => {
	const  { isAuthenticated, errorMessage, paneId } = state.landing;
	return {
		isAuthenticated,
		errorMessage,
		paneId
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
			onSwitchPane:    bindActionCreators(switchPane,dispatch),
			onWaitlistClick: bindActionCreators(joinWaitlist, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
