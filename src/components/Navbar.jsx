import { useState } from 'react'
import{Link, NavLink} from 'react-router-dom'
import {Links} from '../data'
import {MdOutlineClose} from 'react-icons/md'
import React from 'react'

import { EffectCards } from "swiper";

import './navbar.css'
import Logo from '../image/logo.jpg'

const Navbar = () => {
  const[isNavShowing , setIsNavShowing] = useState(false);
  return (
    <nav>
        <div className="container nav__container">
        <Link to="/"className='logo' onClick={() => setIsNavShowing(false)} >
            <img src={Logo} alt="Nav Logo"/>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav':'hide__nav' }`}>
          {
           Links.map(({name ,path},index ) =>  {  
            return(
              <li>
                <NavLink to={path}className={ ({isActive })=>isActive ?'active-nav':'' }onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
              </li>
            )
           })
          }
        </ul>
          
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
            {
              isNavShowing?<MdOutlineClose/>:<MdOutlineClose/>
            }

          </button>
        </div>
    </nav>
  )
}

export default Navbar