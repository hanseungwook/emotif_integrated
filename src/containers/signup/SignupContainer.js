import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupUser } from './signupActions';
import SignupPage from '../../components/SignupPage';
import DashboardContainer from '../dashboard/DashboardContainer';


export class SignupContainer extends Component {

	render(){
		const { isAuthenticated, errorMessage, onSignupClick } = this.props;

		if ( isAuthenticated ){
			return (
				<DashboardContainer/>
			);
		}
		else {
			return (
				<SignupPage errorMessage={errorMessage} 
							onSignupClick={onSignupClick}/>
			);
		}
	}

}

SignupContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onSignupClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};


const mapStateToProps = (state) => {
	const { isAuthenticated, errorMessage } = state.signup;
	return {
		isAuthenticated,
		errorMessage
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		onSignupClick: bindActionCreators(signupUser, dispatch),
		dispatch
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
