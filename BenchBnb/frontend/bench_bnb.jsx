import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//TESTING START
  import { logout, signup, login } from './actions/session_actions';
  import { fetchBenches } from './util/bench_api_util';
//TESTING END


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store;

  if(window.currentUser) {
    const preloadedState = {
      entities: {
        users: {[window.currentUser.id]: window.currentUser}
      },
      session: {id: window.currentUser.id}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.fetchBenches = fetchBenches;
  // TESTING END


  ReactDOM.render(<Root store={ store }/>, rootEl);
});


//TESTING START
  //Test User
    // {user:
    //   {username: "fluffykittens",
    //     password: "password"}}

//TESTING END
