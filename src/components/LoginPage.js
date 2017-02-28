import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';

import {fullWhite, blueGrey700} from 'material-ui/styles/colors';
import ActionGetApp from 'material-ui/svg-icons/action/get-app';
import ActionImportantDevices from 'material-ui/svg-icons/action/important-devices';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';
import ActionAssessment from 'material-ui/svg-icons/action/assessment';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import CommunicationLiveHelp from 'material-ui/svg-icons/communication/live-help';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';


import '../styles/styles.scss';


export default class LoginPage extends Component {


	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		const user = this.refs.email.getValue().trim();
		const pass = this.refs.password.getValue().trim();
		const creds = { email: user, password: pass };
		this.props.onLoginClick(creds);
	}

	render() {

		const { errorMessage } = this.props;

		return (
			<MuiThemeProvider muiTheme={muiTheme}>	
			<div className='parent'>
				<div className='nav'>
					<FlatButton hoverColor={blueGrey700} label='Philosophy' onClick={() => console.log('we are')}/>
					<FlatButton hoverColor={blueGrey700} label='Designers' onClick={() => console.log('allo')}/>	
					<FlatButton hoverColor={blueGrey700} label='Methods' onClick={() => console.log('noone')}/>
					<FlatButton hoverColor={blueGrey700} label='Contact Us' onClick={() => console.log('noone')}/>
				</div>
				<div className='main_text'>
					<h1>Fitted, Expressive</h1>
					<h1>Clothing</h1>
					<h1>From Designers</h1>
					<h1>To You</h1>
				</div>
				<div style={styles.main}>
					<div className='login'>
						<TextField type='text' ref='email' hintText='Email' color={fullWhite} hintStyle={{color:'white'}}/>
						<RaisedButton style={styles.but} backgroundColor={blueGrey700} label='Submit' onClick={() => this.handleClick()}/>
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
	tab: {
		backgroundColor: blueGrey700,
		height: 50,
	},
	icon: {
		marginRight: 190,
		marginLeft: 190,
		lineHeight: 1,
	},	
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
