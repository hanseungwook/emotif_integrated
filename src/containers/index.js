import { combineReducers } from 'redux';
import { routerReducer   } from 'react-router-redux';

import landingReducer          from '../containers/landing/landingReducers';
import preferencesReducer      from '../containers/preferences/preferencesReducers';
import browseReducer           from '../containers/browse/browseReducers';
import loginReducer            from '../containers/login/loginReducers';
import signupReducer           from '../containers/signup/signupReducers';


const rootReducer = combineReducers({
  landingReducer,
  loginReducer,
  signupReducer,
  preferencesReducer,
  browseReducer,
  routing: routerReducer
});

export default rootReducer;
