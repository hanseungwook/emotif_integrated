import React, { Component, PropTypes } from 'react';
//SUBCOMPONENTS
import Header from './Header';
import Panes  from './Panes';

export default
class LandingPage extends Component {
	constructor(props){
		super(props);
		this.handleClickWaitlist = this.handleClickWaitlist.bind(this);
	}

	handleClickWaitlist () {
		const user  = this.refs.email.getValue().trim();
		const creds = { email: user};
		this.props.onWaitlistClick(creds);
	}

	render() {
		const { errorMessage } = this.props;
		// let successMessage = "";
		return (
      <div>
        <Header/>
        <Panes/>
      </div>
		);
	}

}

const styles = {

};


LandingPage.propTypes = {
	onLoginClick: PropTypes.func.isRequired,
//	onWaitlistClick: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
