import { combineReducers } from 'redux';
import { routerReducer   } from 'react-router-redux';

import landing     from '../containers/landing/landingReducers';
import preferences from '../containers/preferences/preferencesReducers';
import browse      from '../containers/browse/browseReducers';
import login      from '../containers/login/loginReducers';
import signup      from '../containers/signup/signupReducers';


const rootReducer = combineReducers({
  landing,
  login,
  signup,
  preferences,
  browse,
  routing: routerReducer
});

export default rootReducer;
