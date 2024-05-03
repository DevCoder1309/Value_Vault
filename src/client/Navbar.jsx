import React, { useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const homeRef = useRef(null);
  const searchRef = useRef(null);

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSearch = () => {
    searchRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <svg style={{ display: 'none' }}>
        <defs>
          <g id="home">
            <path fill="#90A4AE" d="M42,48H6c-3.3,0-6-2.7-6-6V6c0-3.3,2.7-6,6-6h36c3.3,0,6,2.7,6,6v36C48,45.3,45.3,48,42,48z"/>
            <path fill="#212121" d="M20.8,35.5v-9.6h6.4v9.6h8V22.7H40L24,8.3L8,22.7h4.8v12.8H20.8z"/>
          </g>
          <g id="search">
            <path fill="#90A4AE" d="M22.9,20.1h-1.5l-0.5-0.5c1.8-2.1,2.9-4.8,2.9-7.7C23.8,5.3,18.5,0,11.9,0S0,5.3,0,11.9s5.3,11.9,11.9,11.9c3,0,5.7-1.1,7.7-2.9l0.5,0.5v1.4l9.1,9.1l2.7-2.7L22.9,20.1z M11.9,20.1c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S16.4,20.1,11.9,20.1z"/>
          </g>
        </defs>
      </svg>

      <nav className="nav__cont">
        <ul className="nav">
          <li className="nav__items ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
              <use xlinkHref="#home"></use>
            </svg>
            <a href='#' onClick={scrollToHome}>Home</a>
          </li>
          <li className="nav__items ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <use xlinkHref="#search"></use>
            </svg>
            <a href='#' onClick={scrollToSearch}>Search</a>
          </li>
        </ul>
      </nav>
      <div ref={homeRef}></div>
      <div ref={searchRef}></div>
    </>
  );
};

export default Navbar;
