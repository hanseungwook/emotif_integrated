import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import '../styles/landing.scss';

export default class LandingPage extends Component {

	constructor(props){
		super(props);
		this.handleClickWaitlist = this.handleClickWaitlist.bind(this);
	}

	handleClickWaitlist () {
		const user = this.refs.email.getValue().trim();
		const creds = { email: user};
		this.props.onWaitlistClick(creds);
	}

	render() {

		const { errorMessage } = this.props;

		let successMessage = '';

		return (
			<div>
			<Link to={'/'} className='title_ref'><div className='title'> Émotif </div></Link>
			<div className='subtitle'> <b> Clothing made for your figure </b> </div>
			<div className='content'>
				<div className='slides'>
					<Link to={'signup'}><div className='signup_but'> Sign Up </div></Link>
					<Link to={'login'}><div className='login_but'> Login </div></Link>
					<img src={require('../../images/art2.jpg')}/>
				</div>
				<div className='nav'>
					<a href='preferences.html'>Clothes</a>
					<a href='preferences.html'>Designers</a>
					<a href='preferences.html'>Values</a>
				</div>
				<div className='waitlist'>
					<p> Join the Waitlist </p>
					{successMessage}
					{errorMessage}
					<form action='hello'>
						<input type='text' placeholder='Email' name='fname'/><br/>
					</form>
				</div>
				<div className='info'>
					<img src={require('../../images/shape.jpg')}/>
					<img src={require('../../images/designer.jpg')}/>
					<img src={require('../../images/art.jpg')}/>
						<p>Tailored to your <b>shape</b></p>
						<p>Tailored to your <b>tastes</b></p>
						<p>Tailored to your <b>values</b></p>
				</div>
			</div>
			<div className='footer'>
				<p>Contact Us</p>
				<p>Press</p>
				<p>Policies</p>
				<p>Help</p>
				<p>Manufacturing</p>
			</div>
			</div>
		);
	}

}

LandingPage.propTypes = {
	onWaitlistClick: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
