import React, { useRef } from 'react';
import Logout from './Logout';

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
      <nav className="bg-black text-white p-4">
        <ul className="flex justify-center gap-64 text-xl">
          <li className="">
            <a href='#' onClick={scrollToHome}>Home</a>
          </li>
          <li className="">
            <a href='#' onClick={scrollToSearch}>Search</a>
          </li>
          <li className=''>
            <Logout/>
          </li>
        </ul>
      </nav>
      <div ref={homeRef}></div>
      <div ref={searchRef}></div>
    </>
  );
};

export default Navbar;
