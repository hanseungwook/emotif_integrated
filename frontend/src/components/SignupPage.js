import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import '../styles/signup.scss';


export default class SignupPage extends Component {


	constructor(props){
		super(props);
	}

	handleClickSignup () {
		const user = this.refs.email.value;
		const pass = this.refs.password.value;
		console.log(user);
		console.log(pass);
		const creds = { email: user, password: pass };
		this.props.onSignupClick(creds);
	}

	render() {

		const { errorMessage } = this.props;

		let successMessage = "";

		return (
			<div className='signup'>
			<Link to='/' className='title_ref'><div className='title'> Émotif </div></Link>
			<div className='subtitle'> <b> Join the movement. </b> </div>
			<div className='content'>
				<div className='form'>
						{successMessage &&
							<p>{successMessage}</p>
						}
						<h2> Sign Up </h2>
						<input type='text' ref='email' placeholder='Email'/>
						<input type='text' ref='password' placeholder='Password'/>
						<div className='next_but' onClick={() => {this.handleClickSignup(); successMessage="hey";}}>NEXT</div>
						{errorMessage &&
							<p>{errorMessage}</p>
						}
				</div>
			</div>
			</div>
		);
	}

}

SignupPage.propTypes = {
	onSignupClick: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
