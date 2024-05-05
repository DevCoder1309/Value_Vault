import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainPage from './MainPage';
import Login from './Login';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false);
  const [users, setUsers] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/home')
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  const allowedDomains = ['gmail.com', 'yahoo.com', 'rediff.com', 'hotmail.com'];

  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const handleBack = () => {
    setTimeout(() => {
      setShowLogin(true);
    }, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const foundUser = users.find(user => user.name === name);
    const foundEmail = users.find(user => user.email === email);

    if (foundUser) {
      alert("Username already exists");
      return;
    }

    if (foundEmail) {
      alert("Email already in use");
      return;
    }

    const emailDomain = email.split('@')[1];
    if (!allowedDomains.includes(emailDomain)) {
      alert("Please enter a valid email with allowed domains: gmail.com, yahoo.com, rediff.com, hotmail.com");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long and contain at least one number, one uppercase letter, one lowercase letter, and one special character.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        name,
        email,
        phone,
        password
      });
      console.log(response.data);
      setSignedUp(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (signedUp) {
    return <MainPage />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent bg-cover font-prim" style={{ backgroundImage: 'url(grocery-store.jpg)' }}>
      {showLogin ? (
        <Login users={users} />
      ) : (
        <div className="bg-indigo-300 rounded-xl p-14 text-indigo-900">
          <h2 className="font-extrabold mb-6 text-2xl uppercase text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded p-1 bg-white text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded p-1 bg-white text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded p-1 bg-white text-gray-800"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded p-1 bg-white text-gray-800"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="rounded p-1 bg-white text-gray-800" 
              />
            </div>
            <button type="submit" className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-900 transition duration-300 ease-in-out">
              Sign Up
            </button>
          </form>
          <br />
          <a href="#" onClick={handleBack} className="font-bold">Already have an account?</a>
        </div>
      )}
    </div>
  );
};

export default SignUp;
