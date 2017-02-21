import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, logoutUser } from './loginActions';
import LoginPage from '../../components/LoginPage';
import DashboardContainer from '../dashboard/DashboardContainer';


export class LoginContainer extends Component {

	render(){
		const { isAuthenticated, errorMessage, onLogoutClick, onLoginClick } = this.props;

		if ( isAuthenticated ){
			return (
				<DashboardContainer onLogoutClick={onLogoutClick}/>
			);
		}
		else {
			return (
				<LoginPage errorMessage={errorMessage} onLoginClick={onLoginClick}/>
			);
		}
	}

}

LoginContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
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
		onLoginClick: bindActionCreators(loginUser, dispatch),
		onLogoutClick: bindActionCreators(logoutUser, dispatch),
		dispatch
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

