import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
import { BiMessageAltDots } from "react-icons/bi";
export const Navbar = () => {
  return (
    <nav className='menu'>
        <div className="container">
            <div className="menu-list">
              <div className="logo">
                  <img src="/images/Logo.svg" alt="logo" />
              </div>
              <div className="menu-bar">
                  <div className="main-menu">
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[15px] font-medium font-roboto leading-5 text-black " : "text-[15px] font-normal font-roboto leading-5 text-[#707070] "}>Welcome!</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[15px] font-medium font-roboto leading-5 text-black " : "text-[15px] font-normal font-roboto leading-5 text-[#707070] "}>About Me</NavLink></li>
                        <li><NavLink to="/skill" className={({ isActive }) => isActive ? "text-[15px] font-medium font-roboto leading-5 text-black " : "text-[15px] font-normal font-roboto leading-5 text-[#707070] "}>Skills</NavLink></li>
                        <li><NavLink to="/works" className={({ isActive }) => isActive ? "text-[15px] font-medium font-roboto leading-5 text-black " : "text-[15px] font-normal font-roboto leading-5 text-[#707070] "}>Portfolio</NavLink></li>
                        <li><NavLink to="/testimonial" className={({ isActive }) => isActive ? "text-[15px] font-medium font-roboto leading-5 text-black " : "text-[15px] font-normal font-roboto leading-5 text-[#707070] "}>Testimonial</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[15px] font-medium font-roboto leading-5 text-black " : "text-[15px] font-normal font-roboto leading-5 text-[#707070] "}>Contact</NavLink></li>
                    </ul>
                  </div>
                  <div className="menu-button">
                    <button>Hire Me</button>
                    <div className="icon">
                        <BiMessageAltDots />
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </nav>
  )
}
