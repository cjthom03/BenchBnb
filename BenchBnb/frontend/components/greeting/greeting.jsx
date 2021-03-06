import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  if(!currentUser){
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
  return (
    <div>
      <p>Welcome {currentUser.username}</p>
      <button
        onClick={() => logout()}
        >Logout</button>
    </div>
  );
};

export default Greeting;
