import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Badge from 'material-ui/Badge';
// import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';

import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionHelp from 'material-ui/svg-icons/action/help';
import ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionTimeline from 'material-ui/svg-icons/action/timeline';
import ActionHighlightOff from 'material-ui/svg-icons/action/highlight-off';


import {lightBlue500} from 'material-ui/styles/colors';

import '../styles/dashboard.scss';


export default class Dashboard extends Component {

	render() {
		const { data, onLogoutClick } = this.props;
		const lightGrey = '#A0ACBF';
		const grey = '#9AA2AE';

		const patients = [];
		const dataObj = JSON.parse(data.quotes)[0];
		for (const patient of dataObj.patients) {
			patients.push(patient.info.patientName);
		}

		return (
			<MuiThemeProvider>
			<div>
				<div className='topmenu'>
					<Paper style={styles.paper} zDepth={2}>
					<AutoComplete
						hintText='Search Patients'
						fullWidth={true}
						style={styles.search}
						filter={AutoComplete.noFilter}
						dataSource={patients}
					/>
					<Badge style={styles.badge} badgeContent={10} secondary={true} badgeStyle={{top: 12, right: 12, backgroundColor: lightBlue500}}>
						<IconButton tooltip='Notifications'>
						<NotificationsIcon color={grey}/>
						</IconButton>
					</Badge>
					</Paper>
				</div>
				<div className='logo'>
					<h1> Auxcare </h1>
				</div>
				<div className='divider'/>
				<div className='menu'>
					<Menu>
						<h3>Menu</h3>
						<MenuItem primaryText='Dashboard' style={styles.menubut} leftIcon={<ActionDashboard color={lightGrey}/>} />
						<MenuItem primaryText='View Patients' style={styles.menubut} leftIcon={<ActionPermIdentity color={lightGrey}/>} />
						<MenuItem primaryText='View Data' style={styles.menubut} leftIcon={<ActionTimeline color={lightGrey}/>} />
						<MenuItem primaryText='Help' style={styles.menubut} leftIcon={<ActionHelp color={lightGrey}/>} />
						<MenuItem primaryText='Settings' style={styles.menubut} leftIcon={<ActionSettings color={lightGrey}/>} />
						<MenuItem primaryText='Log Out' style={styles.menubut} leftIcon={<ActionHighlightOff color={lightGrey}/>} onTouchTap={() => onLogoutClick()} />
					</Menu>
				</div>
				<div className='main'>
					<h1> Hello Doctor {dataObj.name} </h1>
					{data &&
					<div>
						<blockquote>{data.quotes}</blockquote>
					</div>
					}
				</div>
			</div>
			</MuiThemeProvider>
		);
	}
}


const styles = {
	menubut: {
		color: '#A0ACBF',
		fontWeight: 'bold',
		marginLeft: 10,
		cursor: 'pointer',
	},
	badge: {
		float: 'right',
	},
	search: {
		float: 'left',
		width: '40%',
		marginLeft: 20,
		marginTop: 15,
	},
	paper: {
		width: '100%',
		height: '5em',
  },
};

Dashboard.propTypes = {
	onLogoutClick: PropTypes.func.isRequired,
	data: PropTypes.object
};

// Contact GitHub API Training Shop Blog About
