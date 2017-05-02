import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { joinWaitlist } from './landingActions';
import LandingPage from '../../components/LandingPage';
// import BrowsePage from '../../components/browse/BrowsePage';

export class LandingContainer extends Component {
	constructor(props) {
			super(props);
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log("should update : ",(nextProps.isAuthenticated !== this.props.isAuthenticated))
    return nextProps.isAuthenticated !== this.props.isAuthenticated;
  }


	render(){
		if (this.props.isAuthenticated){
			return (
				<LandingPage
					onWaitlistClick = {this.props.onWaitlistClick}
				/>
			);
		} else {
			return (
				<LandingPage
					// onWaitlistClick = {this.props.onWaitlistClick}
				/>
			);
		}
	}
}

LandingContainer.propTypes = {
	onWaitlistClick	: PropTypes.func.isRequired,
	isAuthenticated	: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
	const { isAuthenticated, errorMessage } = state;
	return {
		isAuthenticated,
		errorMessage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return{
		onWaitlistClick: bindActionCreators(joinWaitlist, dispatch),
		dispatch
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
