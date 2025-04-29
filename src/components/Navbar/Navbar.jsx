import React, { useEffect, useState } from "react";
import assets from "../../assets/assets";
import "./Navbar.css"
import { Link } from "react-scroll";

export default function Navbar() {
    const [mobileMenu,setMobileMenu]=useState(false)
    const toggleMenu=()=>{
       mobileMenu? setMobileMenu(false):setMobileMenu(true)
    }

    const [sticky,setSticky]=useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY > 500 ? setSticky(true): setSticky(false)
        })
    },[])
    return (
        <nav className={`container ${sticky?"dark-nav":""}`}>
            <img src={assets.logo} alt="" className="logo" />
            <ul className={mobileMenu?"":"hide-mobile-menu"}>
                <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to="campus"  smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonals</Link></li>
                <li><Link className="btn" to="contact" smooth={true} offset={-260} duration={500}>Contact us</Link></li>
            </ul>
            <img src={assets.menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
        </nav>
    );
    }