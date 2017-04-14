import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from './loginActions';
import LoginPage from '../../components/LoginPage';
import BrowseContainer from '../browse/BrowseContainer';


export class LoginContainer extends Component {

	render(){
		const { isAuthenticated, errorMessage, onLoginClick } = this.props;
		if ( isAuthenticated ){
			return (
				<BrowseContainer/>
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
	errorMessage: PropTypes.string
};


const mapStateToProps = (state) => {
	const { isAuthenticated, errorMessage } = state;
	return {
		isAuthenticated,
		errorMessage
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		onLoginClick: bindActionCreators(loginUser, dispatch),
		dispatch
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
