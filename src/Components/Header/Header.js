import React from 'react'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <nav className='container'>
        <div className="navbar">
            <Link to='/'><img src={logo} alt="" className='logo'/></Link>
            <ul className="nav-links">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header