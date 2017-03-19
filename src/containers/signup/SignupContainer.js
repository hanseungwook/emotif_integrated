import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, logoutUser, joinWaitlist } from './signupActions';
import SignupPage from '../../components/SignupPage';
import DashboardContainer from '../dashboard/DashboardContainer';


export class SignupContainer extends Component {

	render(){
		const { isAuthenticated, errorMessage, onLogoutClick, onLoginClick, onWaitlistClick } = this.props;

		if ( isAuthenticated ){
			return (
				<DashboardContainer onLogoutClick={onLogoutClick}/>
			);
		}
		else {
			return (
				<SignupPage errorMessage={errorMessage} 
							onLoginClick={onLoginClick} 
							onWaitlistClick={onWaitlistClick}/>
			);
		}
	}

}

SignupContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onWaitlistClick: PropTypes.func.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};


const mapStateToProps = (state) => {
	const { isAuthenticated, errorMessage } = state.login;
	return {
		isAuthenticated,
		errorMessage
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		onWaitlistClick: bindActionCreators(joinWaitlist, dispatch),
		onLoginClick: bindActionCreators(loginUser, dispatch),
		onLogoutClick: bindActionCreators(logoutUser, dispatch),
		dispatch
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);

