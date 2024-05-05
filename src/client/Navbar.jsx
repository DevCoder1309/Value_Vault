import React, { useRef } from 'react';
import Logout from './Logout';

const Navbar = ({ scrollToHome, scrollToSearch }) => {
  const searchRef = useRef(null);

  return (
    <nav className="bg-black text-white p-5 font-prim">
      <ul className="flex justify-between gap-64 text-xl ml-6">
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
          <Logout />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
