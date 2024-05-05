import React, { useState, useEffect } from 'react';
import SignUp from './SignUp';
import MainPage from './MainPage';

const Login = ({ users }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignUpClick = () => {
    setMoveLeft(true);
    setTimeout(() => {
      setShowSignUp(true);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const foundUser = users.find(user => user.name === username && user.password === password);

    if (foundUser) {
      setIsLoggedIn(true);
      localStorage.setItem('isAuthenticated', 'true'); 
    } else {
      alert('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    return <MainPage />;
  }

  return (
      <div className="min-h-screen flex justify-center items-center bg-transparent bg-cover font-prim" style={{ backgroundImage: 'url(grocery-store.jpg)'}}>
      {showSignUp ? (
        <SignUp users={users} />
      ) : (
        <div className="bg-indigo-300 rounded-xl p-16 shadow-lg shadow-black text-indigo-900">
          <h2 className='font-extrabold mb-6 text-3xl uppercase text-center'>Join Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className='block'>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="rounded p-1 bg-white text-gray-800" 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className='block'>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="rounded p-1 bg-white text-gray-800" 
              />
            </div>
            <button type="submit" className='w-32 p-2 uppercase rounded-lg text-sm font-bold bg-indigo-500 border-indigo-700 text-indigo-200 hover:bg-indigo-900 transition duration-300 ease-in-out'>Login</button>
          </form>
          <br />
          <a href='#' onClick={handleSignUpClick} className='font-extrabold font-prim'>Don't have an account?</a>
        </div>
      )}
    </div>
  );
};

export default Login;
