import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from '../containers/login/loginReducers';
import data from '../containers/dashboard/dashboardReducers';


const rootReducer = combineReducers({
	login,
	data,
	routing: routerReducer
});

export default rootReducer;