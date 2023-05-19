import React from 'react';
import "../css/Contact.css";

const Contact = () => {
  return (
    <>
        <div className='contact'>
            <div className='contact__content'>
                <h1>Need additional information?</h1>
                <p>(123) 456 - 7890</p>
                <p>contact@superrental.com</p>
            </div>
            <div className='contact__form'>
                <form>
                    <label>Full Name <b>*</b></label>
                    <input type='text' placeholder='First Last' />
                    <label>Email <b>*</b></label>
                    <input type='text' placeholder='youremail@example.com' />
                    <label>Tell us about it <b>*</b></label>
                    <textarea placeholder='Write Here..' className='form__prompt' />
                    <button className='form__btn'>Send Message</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact