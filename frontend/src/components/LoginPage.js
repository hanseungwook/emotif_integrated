import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


import '../styles/login.scss';


export default class LoginPage extends Component {


	constructor(props){
		super(props);
	}

	handleClickLogin () {
		const user = this.refs.email.value;
		const pass = this.refs.password.value;
		const creds = { email: user, password: pass };
		this.props.onLoginClick(creds);
	}

	render() {

		const { errorMessage } = this.props;

		let successMessage = "";

		return (
			<div className='login'>
				<Link to='/'><div className='title'>Émotif</div></Link>
				<div className='subtitle'> <b> Join the movement. </b> </div>
				<div className='content'>
					<div className='form'>
							{successMessage &&
								<p>{successMessage}</p>
							}
							<h2> Login </h2>
							<input type='text' ref='email' placeholder='Email'/>
							<input type='password' ref='password' placeholder='Password'/>
							<div className='next_but' onClick={() => {this.handleClickLogin(); successMessage="hey";}}>LOGIN</div>
							{errorMessage &&
								<p>{errorMessage}</p>
							}
					</div>
				</div>
			</div>
		);
	}

}

LoginPage.propTypes = {
	onLoginClick: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
