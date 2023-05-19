import React, {useState} from 'react';
import "../css/Nav.css";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import Logo from "../images/cakeLogo.png";

const Nav = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    }
    
    return (
    <>
        <nav>
            {/* mobile nav */}
            <div className={`mobile-nav ${nav ? "open-nav" : ""}`}>
                <div onClick={openNav} className="mobile-nav__close">
                    <p className='mobile-nav__XBtn'>X</p>
                </div>
                <ul className='mobile-nav__links'>
                    <li>
                        <Link onClick={openNav} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to='/Shop'>Shop</Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to='/Contact'>Contact</Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to='/Cart'>Cart</Link>
                    </li>
                </ul>
            </div>

            {/* Desktop Nav */}
            <div className='nav'>
                <div className='nav__left'>
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <img src={Logo} alt='cake logo' className='nav__logo' />
                    </Link>
                </div>
            
                <div className="nav__btns">
                    <ul className='nav__links'>
                        <li>
                            <Link className='home-link' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='home-link' to="/Shop">Shop</Link>
                        </li>
                    </ul>
                    <Link className='home-link' to="/Contact">
                        <button className='nav__btn'>Contact</button>
                    </Link>
                    <Link to='/Cart'>
                        <IconButton>
                            <ShoppingCartIcon fontSize='large' className='nav__cart' />
                            <div className='navCart__num'>
                                1
                            </div>
                        </IconButton>
                    </Link>
                </div>

            {/* mobile nav */}
                <div className='mobile-nav__hamburger' onClick={openNav}>
                    <svg viewBox="0 0 100 80" width="40" height="40" className="mobile-nav__hamburgerIcon">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                    </svg>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav