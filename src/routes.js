import React from 'react';
import { Route, IndexRoute } from 'react-router';

import NotFoundPage from './components/NotFoundPage.js';
import App from './containers/App';
import LoginContainer from './containers/login/LoginContainer'; // eslint-disable-line import/no-named-as-default
import DashboardContainer from './containers/dashboard/DashboardContainer'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path='/' component={App}>
    <IndexRoute component={LoginContainer}/>
    <Route path='welcome' component={DashboardContainer}/>
    <Route path='*' component={NotFoundPage}/>
  </Route>
);
