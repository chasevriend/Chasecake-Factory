import React from 'react';
import "../css/Hero.css";
import { Link } from 'react-router-dom';
import Cake from '../images/cake.png';
import Cookies from '../images/cookies.png';

const Hero = () => {
  return (
    <> 
        <div className='hero'>
            <img src='https://cdn.shopify.com/s/files/1/0549/9456/7357/files/strawberry-shortcake_home-page-template_301cbf78-c8f8-4d07-b9f8-2d073082d69e_360x.png?v=1683561809' className='hero__img1' alt=''></img>
            <img src={Cookies} alt='' className='hero__img2' />
            <div className="hero__content">
                <h1>We'll keep it <b>short</b> and <b>sweet</b>!</h1>
                <p>Start your Order</p>
                <Link to='/Shop'>
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
        <div className='main'>
            <div className='main__cell cell1'>
                <img src='https://cdn.shopify.com/s/files/1/0549/9456/7357/files/cookie-fpo_2x_96594021-b3ee-4c57-a965-42548b9a34a3_360x.png?v=1616210946' alt='' className='main__img' />
                <span>
                    <h3>For checking off your to-do list.</h3>
                    <Link to="/Cookies">
                        <button className='mainCell__btn'>Shop Cookies</button>
                    </Link>
                </span>
            </div>
            <div className='main__cell cell2'>
                <img src='https://cdn.shopify.com/s/files/1/0549/9456/7357/files/cupcakes_animated_360x.gif?v=1618580590' alt='' className='main__img' />
                <span>
                    <h3>For the frosting on top of an excellent week.</h3>
                    <Link to="/Cupcakes">
                        <button className='mainCell__btn'>Shop Cupcakes</button>
                    </Link>
                </span>
            </div>
            <div className='main__cell cell3'>
                <img src={Cake} alt='' className='img3' />
                <span>
                    <h3>Why stop at cupcakes?</h3>
                    <Link to="/Cakes">
                        <button className='mainCell__btn'>Shop Cakes</button>
                    </Link>
                </span>
            </div>
        </div>
    </>
  )
}

export default Hero