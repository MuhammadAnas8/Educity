import React, { useEffect, useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

function Navbar() {

  //references for scrolling navbar
  const sectionRefs = {
    home: useRef(null),
    programs: useRef(null),
    about: useRef(null),
    campus: useRef(null),
    testimonials: useRef(null),
  };

  const [sticky, setSticky] = React.useState(false)
  useEffect(() => {
   window.addEventListener('scroll', () => {
     window.scrollY > 50 ? setSticky(true) : setSticky(false)
   }) 
  },[])
  const [toggleMenu,setToggleMenu] = useState(false);
  const hide_menu = () =>{
      toggleMenu ? setToggleMenu(false) : setToggleMenu(true)

  }
  return (
 <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
    <img src={logo} alt=""  className='logo'/>
    <ul className={toggleMenu?'':'hide-menu'}>
        <li>
          <a href="#">Home</a>
          </li>
        <li>
        <a href="#programs">Programs</a>
        </li>
        <li>
        <a href="#about">About Us</a>
        </li>
        <li>
        <a href="#campus">Campus</a>
        </li>
        <li>
        <a href="#testimonials">Testimonials</a>
        </li>
        <li><button className="btn"><a href="#contact">Contact Us</a></button></li>
    </ul>
    <img src={menu_icon} className='menu-icon' alt="" onClick={hide_menu} />
 </nav>
  )
}

export default Navbar
