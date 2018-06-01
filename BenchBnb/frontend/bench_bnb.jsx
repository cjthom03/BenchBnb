import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtils from './util/session_api_util';
import SessionReducer from './reducers/session_reducer';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // window.sessionReducer = SessionReducer;
  // window.signup = SessionApiUtils.signup;
  // window.logout = SessionApiUtils.logout;
  // window.login = SessionApiUtils.login;
  // window.user1 = {username: "timmy4", password: "password"};
  // window.user2 = {username: "timmy99", password: "password"};

  ReactDOM.render(<h1>OMG SO MUCH SETUP</h1>, root);
});
