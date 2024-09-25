import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling
import './Navbar.css';
import menu_icon from '../Assets/menu-icon.png'
import logo from '../Assets/logo.png';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);
  const [mobileMenu,setMobileMenu] = useState(false);
  const togglemenu =()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li>
          <Link to='program' smooth={true} offset={-260} duration={500}>Program</Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-150} duration={500}>About us</Link>
        </li>
        <li>
          <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link>
        </li>
        <li>
          <Link to='testimonals' smooth={true} offset={-260} duration={500}>Testimonals</Link>
        </li>
        <li>
          <Link to='contact' smooth={true} offset={0} duration={-260} className='btn'>Contact us</Link>
        </li>
        <li>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={togglemenu} />
    </nav>
  );
};

export default Navbar;
