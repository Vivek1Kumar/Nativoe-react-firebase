import React from 'react';

import { auth } from '../../firebase';

import './index.css';

const SignOutButton = () =>
  <label className="rigth"
    onClick={auth.doSignOut}
  >
    SignOut
  </label>

export default SignOutButton;
