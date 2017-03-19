import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { callApi, logoutUser } from './dashboardActions';
import Dashboard from '../../components/Dashboard';
import LandingContainer from '../landing/LandingContainer';

class DashboardContainer extends Component {

	render(){
		const { data, onSecretQuoteClick, onLogoutClick } = this.props;

		if ( isAuthenticated ){
			return (
				<Dashboard data={data}
							onSecretQuoteClick={onSecretQuoteClick}
							onLogoutClick={onLogoutClick}/>
			);
		}
		else {
			return (
				<LandingContainer/>
			);
		}
	}
}

DashboardContainer.propTypes = {
	data: PropTypes.object.isRequired,
	onSecretQuoteClick: PropTypes.func.isRequired,
	dispatch: PropTypes.func.isRequired,
	onLogoutClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	const { data }  = state;
	return{
		data
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		onSecretQuoteClick: bindActionCreators(callApi, dispatch),
		onLogoutClick: bindActionCreators(logoutUser, dispatch),
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);