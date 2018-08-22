import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import Home from '../Home';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../routes/routes';

import './index.css';

const App = () =>
  <Router>
    <div className="app">
      <Navigation />
      <Route exact path={routes.SIGN_UP} component={() => <SignUp />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignIn />} />
      <Route exact path={routes.HOME} component={() => <Home />} />
    </div>
  </Router>

export default withAuthentication(App);