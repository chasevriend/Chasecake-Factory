import React from 'react';
import "../css/About.css";

const About = () => {
  return (
    <>
        <div className='about'>
            <h2>Get rewarded for rewarding yourself</h2>
            <p>With Sprinkles Perks, every celebration = even more wins. Rack up points for every dollar 
            spent, so you can treat yourself to more irresistible goodies. Sprinkles Perks, FTW</p>
            <div className='about__content'>
                <span>
                    <img src='https://cdn.shopify.com/s/files/1/0549/9456/7357/files/mobile-phone-with-arrow-1-f-4-f-2_2x_126dcb4d-08f0-412b-8521-1674672a4537_76x.png?v=1616216149' alt='' className='about__img' />
                    <p>Order on the go.</p>
                </span>
                <span>
                    <img src='https://cdn.shopify.com/s/files/1/0549/9456/7357/files/trophy-1-f-3-c-6_2x_4131d91f-eb77-438a-8b45-accf7086d279_76x.png?v=1616217238' alt='' className='about__img' />
                    <p>Get points for every dollar.</p>
                </span>
                <span>
                    <img src='https://cdn.shopify.com/s/files/1/0549/9456/7357/files/heart-with-ribbon-1-f-49-d_2x_98e025a1-dbf8-4f55-bd14-a440bc875b8c_76x.png?v=1616217259' alt='' className='about__img' />
                    <p>Some pretty sweet deals.</p>
                </span>
                <span>
                    <img src='https://cdn.shopify.com/s/files/1/0549/9456/7357/files/cupcake-1-f-9-c-1-1_2x_cd1ac4fc-051b-42f4-8505-1d2f97bebdf8_76x.png?v=1616217285' alt='' className='about__img' />
                    <p>And ofc, free cupcakes!</p>
                </span>
            </div>
            <button className='about__btn'>Discover More</button>
        </div>
    </>
  )
}

export default About