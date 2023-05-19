import React from 'react'
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className='footer__cell'>
                <p>Our Story</p>
                <p>How to Order?</p>
                <p>Locations</p>
                <p>Perks</p>
                <p>Gift Cards</p>
            </div>
            <div className='footer__cell'>
                <p>Careers</p>
                <p>Corporate Events</p>
                <p>Franchise</p>
                <p>FAQ</p>
                <p>Privacy Policy</p>
            </div>
            <div className='footer__cell'>
                <p>Terms of Service</p>
                <p>Contact Us</p>
                <p>Refund Policy</p>
            </div>
        </div>
    </>
  )
}

export default Footer