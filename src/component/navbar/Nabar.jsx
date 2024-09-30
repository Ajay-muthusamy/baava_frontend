import React, { useState } from "react";
import logo from "../../assets/baava-crackers.png";
import { Outlet, Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nabar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="w-full flex justify-around items-center bg-blue-950 text-white font-poppins px-5">
        <div>
          <img src={logo} alt="alagu crackers logo" className="w-16 md:w-20 rounded-lg" />
        </div>
        <div className="hidden md:flex text-1xl">
          <ul className="flex space-x-9">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/quick-shopping">Quick Shopping</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="flex items-center">
          <h1 className="flex items-center">
            <IoCallSharp className="w-6 h-6 mr-1" /> +91-63832 90293
          </h1>
          {isOpen ?  <button onClick={toggleMenu} className="flex justify-end">
            <AiOutlineClose className="w-8 h-8" />
          </button> : <button className="md:hidden ml-4" onClick={toggleMenu}>
            <AiOutlineMenu className="w-8 h-8" />
          </button> }
          
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-950 text-white p-4">
          <ul className="flex flex-col space-y-4">
            <li><Link to="/" >HOME</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>ABOUT US</Link></li>
            <li><Link to="/quick-shopping" onClick={toggleMenu}>QUICK SHOPPING</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>CONTACT US</Link></li>
          </ul>
        </div>
      )}
  
      <Outlet />
    </div>
  );
};

export default Nabar;
