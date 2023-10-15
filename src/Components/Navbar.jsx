import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineMenu } from 'react-icons/ai';

import './navbar.css'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)

  const handleShowNavbar = () => {
    setShowNav(!showNav)
  }
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          Devlink Marketplace
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <AiOutlineMenu size={22} color={'orange'} className='star' />
        </div>
        <div className={`nav-elements  ${showNav && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/find-dev">Find Dev</NavLink>
            </li>
            <li>
              <NavLink to="/find-jobs">Find Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/subscribe">Subscribe</NavLink>
            </li>
            <li>
              <NavLink to="/login" >Login</NavLink>
            </li>
            <li>
              <NavLink to="/create-account">Create Account</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
