import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { joinWaitlist } from './landingActions';
import LandingPage from '../../components/LandingPage';
import DashboardContainer from '../dashboard/DashboardContainer';


export class LandingContainer extends Component {

	render(){
		const { isAuthenticated, errorMessage, onWaitlistClick } = this.props;

		if ( isAuthenticated ){
			return (
				<DashboardContainer/>
			);
		}
		else {
			return (
				<LandingPage errorMessage={errorMessage}
							onWaitlistClick={onWaitlistClick}/>
			);
		}
	}

}

LandingContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onWaitlistClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};


const mapStateToProps = (state) => {
	const { isAuthenticated, errorMessage } = state.landing;
	return {
		isAuthenticated,
		errorMessage
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		onWaitlistClick: bindActionCreators(joinWaitlist, dispatch),
		dispatch
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);

