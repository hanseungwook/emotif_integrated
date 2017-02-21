import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { callApi } from './dashboardActions';
import Dashboard from '../../components/Dashboard';

class DashboardContainer extends Component {

	componentWillMount(){
		const { dispatch } = this.props;
		dispatch(callApi('protected/doctor/doctor1@gmail.com', true));
	}


	render(){
		return <Dashboard {...this.props}/>;
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
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);