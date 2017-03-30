import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


import '../styles/login.scss';


export default class LoginPage extends Component {


	constructor(props){
		super(props);
	}

	handleClickLogin () {
		const user = this.refs.email.getValue().trim();
		const pass = this.refs.password.getValue().trim();
		const creds = { email: user, password: pass };
		this.props.onLoginClick(creds);
	}

	render() {

		const { errorMessage } = this.props;

		let successMessage = "";

		return (
			<div>
			<Link to='/' className='title_ref'><div className='title'> Émotif </div></Link>
			<div className='subtitle'> <b> Clothing made for your figure </b> </div>
			<div className='content'>
				<div className='login_form'>
						{successMessage &&
							<p>{successMessage}</p>
						}
						<h2> Login </h2>
						<input type='text' ref='email' placeholder='Email'/>
						<input type='text' ref='password' placeholder='Password'/>
						<div className='next_but' onClick={() => {this.handleClickLogin(); successMessage="hey";}}>Login</div>
						{errorMessage &&
							<p>{errorMessage}</p>
						}
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

LoginPage.propTypes = {
	onLoginClick: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
