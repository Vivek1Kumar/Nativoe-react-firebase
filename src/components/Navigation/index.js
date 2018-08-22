import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../routes/routes';
import './index.css';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <header className="row">
    <div className="col-sm-1">
      <label className="link"><Link to={routes.HOME}>Home</Link></label>
    </div>
    <div className="col-sm-1">
      <label className="link"><SignOutButton /></label>
    </div>
  </header>
  
const NavigationNonAuth = () =>
<header className="row">
  <div className="col-sm-1">
    <label className="link"><Link to={routes.SIGN_IN}>SignIn</Link></label>
  </div>
  <div className="col-sm-1">
    <label className="link"><Link to={routes.SIGN_UP}>SignUp</Link></label>
  </div>
</header>


export default Navigation;
