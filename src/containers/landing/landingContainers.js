import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser, logoutUser, joinWaitlist } from './loginActions';
import LoginPage from '../../components/LoginPage';
import DashboardContainer from '../dashboard/DashboardContainer';


export class LandingContainer extends Component {

	render()
	{
		if (isAuthenticated) {
			return (
				<BrowseContainer/>
			);
		} else {
			return (
				<Landing
					{ errorMessage    = this.errorMessage
						onWaitlistClick = this.onWaitlistClick }
				/>
			);
		}
	}
}

LoginContainer.propTypes = {
	onWaitlistClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage   : PropTypes.string
};

const mapStateToProps = (state) => {
	const  { isAuthenticated, errorMessage } = state.login;
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
