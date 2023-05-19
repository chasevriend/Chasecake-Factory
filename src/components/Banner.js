import React from 'react';
import "../css/Banner.css";

const Banner = () => {
  return (
    <>
        <div className='banner'>
            <span>
                <img src='https://pattys-cakes.com/wp-content/themes/pcakeswideopen/images/reviews/yelp-2000-2.svg' alt='' className='banner__img' />
            </span>
            <img src='https://pattys-cakes.com/wp-content/themes/pcakeswideopen/images/reviews/google-1250.svg' alt='' className='banner__img' />
            <img src='https://pattys-cakes.com/wp-content/themes/pcakeswideopen/images/reviews/trip-110-2.svg' alt='' className='banner__img' />
            <img src='https://pattys-cakes.com/wp-content/themes/pcakeswideopen/images/reviews/ww-210-1.svg' alt='' className='banner__img' />
            <img src='https://pattys-cakes.com/wp-content/themes/pcakeswideopen/images/reviews/knot-300-1.svg' alt='' className='banner__img' />
            <img src='https://pattys-cakes.com/wp-content/themes/pcakeswideopen/images/reviews/pc-1000.svg' alt='' className='banner__img' />
        </div>
    </>
  )
}

export default Banner