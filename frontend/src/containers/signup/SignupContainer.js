import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signupUser } from './signupActions';
import SignupPage from '../../components/SignupPage';
import BrowseContainer from '../../containers/browse/BrowseContainer';


export class SignupContainer extends Component {
		constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps) {
		console.log("should update : ",(nextProps.isAuthenticated !== this.props.isAuthenticated))
		return this.props.isAuthenticated !== nextProps.isAuthenticated;
	}

	render(){
		const { isAuthenticated, errorMessage, onSignupClick } = this.props;

		if ( isAuthenticated ){
			return (
				<BrowseContainer/>
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
	const { isAuthenticated, errorMessage } = state.signupReducer;
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
