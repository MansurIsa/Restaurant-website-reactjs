import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Navbar/Navbar.css'
import Logo from '../../images/logo1.png';

function Navbar() {

    const [navBack, setNavBack] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            setNavBack(true)
        }
        else{
            setNavBack(false)
        }
    })

    const [isMobile, setIsMobile] = useState(false);

    const handleClick = () => {
        setIsMobile(!isMobile)

    }

    return (
        <div className={navBack ? "navbar active" : "navbar"} id='navbar'>
            <div className="container wrapper">
                <div className="logo_box">
                    <Link to="navbar" smooth={true} duration={1000}>
                        <img src={Logo} className="logo" alt="" />
                    </Link>
                </div>
                <ul className={isMobile ? "nav_links_mobile" : "nav_links"}>
                    <li>
                        <Link to="home" smooth={true} duration={1000}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={1000}>About</Link>
                    </li>
                    <li>
                        <Link to="products" smooth={true} duration={1000}>Products</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={1000}>Contact</Link>
                    </li>
                </ul>
                <div className="menu_bar" onClick={handleClick}>
                    {isMobile ? <i className='fas fa-times' /> : <i className='fas fa-bars' />}
                </div>
            </div>
        </div>
    )
}

export default Navbar;