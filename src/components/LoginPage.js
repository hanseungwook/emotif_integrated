import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {Tabs, Tab} from 'material-ui/Tabs';

import {fullWhite, lightBlue500, cyan200} from 'material-ui/styles/colors';
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
				<img src={require('../../images/logo.png')}/>
				<div className='nav'>
					<FlatButton hoverColor={lightBlue500} label='Who are we?' onClick={() => console.log('we are')}/>
					<FlatButton hoverColor={lightBlue500} label='Our Data' onClick={() => console.log('allo')}/>	
					<FlatButton hoverColor={lightBlue500} label='Learn More' onClick={() => console.log('noone')}/>
					<FlatButton hoverColor={lightBlue500} label='Contact Us' onClick={() => console.log('noone')}/>
				</div>
				<div style={styles.main}>
					<div className='login'>
						<h3>Login</h3>
						<TextField type='text' ref='email' hintText='Email' color={fullWhite}/>
						<br/><br/>
						<TextField type='password' ref='password' hintText='Password'/>
						<br/><br/>
						<RaisedButton style={styles.but} backgroundColor={lightBlue500} label='Login' onClick={() => this.handleClick()}/>
						{errorMessage &&
							<p>{errorMessage}</p>
						}
					</div>
					<div className='getstarted'>
						<Tabs inkBarStyle={styles.ink}>
						<Tab style={styles.tab} label='Step One' >
							<div className='tab'>
								<p> To get started with Auxcare : </p>
								
								<p> <CommunicationLiveHelp style={styles.icon}/> Learn about our platform.</p>
								<p> 
								<ActionAccountBox/>
								<NavigationArrowForward/>
								<CommunicationEmail/>
								<br/>
								Sign Up and we'll email you!
								</p>
							</div>
						</Tab>
						<Tab style={styles.tab} label='Step Two' >
							<div className='tab'>
								<p> <ActionGetApp style={styles.icon}/> Ask your patients to download our smartphone app. </p>
								<p> <ActionAssessment style={styles.icon}/> They will take weekly medically accurate tests. </p>
							</div>
						</Tab>
						<Tab style={styles.tab} label='Step Three'>
							<div className='tab'>
								<p> <ActionImportantDevices style={styles.icon}/> Get the results right here on this website! </p>
								<p> <ActionAssignment style={styles.icon}/> Check on their symptom progression and tailor your treatment! </p>
							</div>
						</Tab>
						</Tabs>
						<br/>
						<RaisedButton style={styles.but} backgroundColor={lightBlue500} label='Get Started!' onClick={() => this.handleClick()}/>
					</div>
				</div>
			</div>
			</MuiThemeProvider>
		);
	}
	
}

const styles = {
	tab: {
		backgroundColor: lightBlue500,
		height: 50,
	},
	icon: {
		marginRight: 190,
		marginLeft: 190,
		lineHeight: 1,
	},	
	ink: {
		backgroundColor: cyan200,
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
