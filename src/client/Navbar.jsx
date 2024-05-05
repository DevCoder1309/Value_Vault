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
      <nav className="bg-black text-white p-5 font-prim">
        <ul className="flex justify-between  gap-64 text-xl ml-6">
          <li className="">
            <img src="/Value.png" alt="Value Vault" className="h-12" />
          </li>
          <div className='flex gap-20 mr-5 items-center'>
            <li className="uppercase hoverAll font-bold">
              <a href='#' onClick={scrollToHome}>Home</a>
            </li>
            <li className="uppercase hoverAll font-bold">
              <a href='#' onClick={scrollToSearch}>Search</a>
            </li>
            <li className=''>
              <Logout/>
            </li>
          </div>
        </ul>
      </nav>
      <div ref={homeRef}></div>
      <div ref={searchRef}></div>
    </>
  );
};

export default Navbar;
