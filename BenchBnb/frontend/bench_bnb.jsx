import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TESTING START
  import { logout, signup, login } from './actions/session_actions';
//TESTING END


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  // TESTING END


  ReactDOM.render(<Root store={ store }/>, rootEl);
});


//TESTING START
  //Test User
    // {user:
    //   {username: "fluffykittens",
    //     password: "password"}}

//TESTING END
