import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import landing from '../containers/landing/landingReducers';
import login from '../containers/login/loginReducers';
import signup from '../containers/signup/signupReducers';
import data from '../containers/dashboard/dashboardReducers';
import browse from '../containers/browse/browseReducers';


const rootReducer = combineReducers({
	landing,
	login,
	signup,
	data,
	browse,
	routing: routerReducer
});

export default rootReducer;
