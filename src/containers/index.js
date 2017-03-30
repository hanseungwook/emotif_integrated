import { combineReducers } from 'redux';
import { routerReducer   } from 'react-router-redux';

import landing     from '../containers/landing/landingReducers';
import preferences from '../containers/preferences/preferencesReducers';
import browse      from '../containers/browse/browseReducers';

const rootReducer = combineReducers({
  landing,
  preferences,
  browse,
  routing: routerReducer
});

export default rootReducer;
