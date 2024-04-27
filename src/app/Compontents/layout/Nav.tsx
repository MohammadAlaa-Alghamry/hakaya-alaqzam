import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="absolute bg-[rgb(246,235,223, 0)] py-4 w-full ">
      <div className="container mx-auto flex items-center justify-between px-">
        {/* Logo on the left */}
        <div className="flex items-center justify-between md:w-10 sm:w-full space-x-4">
          <Image
            src="/Logo.png"
            width={40}
            height={40}
            alt="Logo"
          />
          {/* Toggle button for mobile */}
          <div className="md:hidden">
            {/* <button className="text-[rgb(62,54,37)] hover:text-[rgb(127,131,65)] px-3 py-2 rounded-md text-lg font-medium">
              <FontAwesomeIcon icon={faBars} /> 
            </button> */}
          </div>
        </div>
        {/* Toggle button and dropdown on the right */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Navigation Links */}
          <a
            href="#"
            className="text-[rgb(62,54,37)] hover:text-[rgb(127,131,65)] px-3 py-2 rounded-md text-lg font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[rgb(62,54,37)] hover:text-[rgb(127,131,65)] px-3 py-2 rounded-md text-lg font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-[rgb(62,54,37)] hover:text-[rgb(127,131,65)] px-3 py-2 rounded-md text-lg font-medium"
          >
            Contact
          </a>

        </div>
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Dropdown */}
          <select className="bg-[rgb(246,235,223)] border-none rounded-md py-2 px-3 text-lg leading-5 font-medium text-[rgb(62,54,37)] hover:text-[rgb(127,131,65)]">
            <option value="en">En</option>
            <option value="ar">AR</option>
          </select>
          {/* User Icon (Placeholder for login) */}
          <Link href="">
            {/* <FontAwesomeIcon
              className="text-[rgb(62,54,37)] hover:text-[rgb(127,131,65)] text-2xl"
              icon={faUser}
            /> */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
