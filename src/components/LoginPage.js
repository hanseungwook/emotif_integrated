import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {fullWhite, grey900, blueGrey700} from 'material-ui/styles/colors';


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
			<MuiThemeProvider muiTheme={muiTheme}>	
			<div className='parent'>
				<div className='nav'>
					<FlatButton hoverColor={blueGrey700} label='Sign Up' href='signup'/>
					<FlatButton hoverColor={blueGrey700} label='Philosophy' onClick={() => console.log('we are')}/>
					<FlatButton hoverColor={blueGrey700} label='Designers' onClick={() => console.log('allo')}/>	
					<FlatButton hoverColor={blueGrey700} label='Contact Us' onClick={() => console.log('noone')}/>
				</div>
				<div style={styles.main}>
					<div className='login'>
						{successMessage &&
							<p>{successMessage}</p>
						}
						<h2> Login </h2>
						<TextField type='text' ref='email' hintText='Email' 
									underlineStyle={{borderColor: grey900}} 
									hintStyle={{color:'black'}} underlineFocusStyle={{borderColor: blueGrey700}} 
									inputStyle={{color: grey900}}/>
						<TextField type='text' ref='password' hintText='Password' 
									underlineStyle={{borderColor: grey900}} 
									hintStyle={{color:'black'}} underlineFocusStyle={{borderColor: blueGrey700}} 
									inputStyle={{color: grey900}}/>
						<RaisedButton style={styles.but} backgroundColor={blueGrey700} 
										label='Submit' onClick={() => {this.handleClickLogin(); successMessage="hey";}}/>
						{errorMessage &&
							<p>{errorMessage}</p>
						}
					</div>
				</div>
			</div>
			</MuiThemeProvider>
		);
	}
	
}

const styles = {

	but: {
		position: 'absolute',
		right: 100,
		left:100,
		bottom: 25,
	},
	main: {
		paddingTop: 150,
		paddingLeft: 195,
		position: 'absolute',
		top:50,
		bottom:0,
		right:0,
		left:0,
	},
};

const muiTheme = getMuiTheme({
	palette: {
		textColor: fullWhite,
	},
});

LoginPage.propTypes = {
	onLoginClick: PropTypes.func.isRequired,
	errorMessage: PropTypes.string
};
