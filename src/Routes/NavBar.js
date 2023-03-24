import React from 'react';
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log('Toggle menu');
    setIsMenuOpen(!isMenuOpen);
  };



  return(
    <nav id="navbar" className="sticky top-0 bg-nav-gradient w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px] ml-5" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10 ">
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-3" >
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-3">
          <NavLink exact activeClassName="active" to="../Routes/AI.js">
            AI
          </NavLink>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-3">
          <NavLink exact activeClassName="active" to="../Routes/Page3.js">
            Empresa
          </NavLink>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mr-10">
          <NavLink exact activeClassName="active" to="../Routes/Planos.js">
            Planos
          </NavLink>
        </li>
      </ul>
      <div className="sm:hidden flex justify-end items-center mr-5">
        <img
  src={isMenuOpen ? close : menu}
  alt="menu"
  className="w-[28px] h-[28px] object-contain cursor-pointer"
  onClick={() => {
    console.log('Menu icon clicked');
    toggleMenu();
  }}
/>
      </div>
    {isMenuOpen && (
      
        <div className=" absolute p-6 bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar">
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            <li className="font-poppins font-medium cursor-pointer text-[16px] text-white">
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="font-poppins font-medium cursor-pointer text-[16px] text-white">
              <NavLink exact activeClassName="active" to="../Routes/AI.js">
                AI
              </NavLink>
            </li>
            <li className="font-poppins font-medium cursor-pointer text-[16px] text-white">
              <NavLink exact activeClassName="active" to="../Routes/Page3.js">
                Empresa
              </NavLink>
            </li>
            <li className="font-poppins font-medium cursor-pointer text-[16px] text-white">
              <NavLink exact activeClassName="active" to="../Routes/Planos.js">
                Planos
              </NavLink>
            </li>
          </ul>
        </div>
        
      )}
    </nav>
  );
};
 
export default Navbar; 




/**  <nav id="navbar" className=" bg- w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px] ml-5" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-dimBlack" : "text-purple"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center mr-5">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
   
);
*/