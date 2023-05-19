import React, { useContext, useRef } from 'react'
import { CartContext } from '../context/CartContext';
import "../css/Products.css"
import { items } from '../data/Data'

const Product = (props) => {
  
  return (
    <>
      
      
        <div className='product' key={props.id}>
          <div className='product__header'>
            <img src={props.img} alt={props.name} />
          </div>
          <p className='product__name'>{props.name}</p>
          <div className='product__details'>
            <p className='product__price'>{props.price}</p>
            <span>
              <button className='products__btn' key={props.id}>
                Add To Cart
              </button>
            </span>
          </div>
        </div>        
        
    </>
  )
}

export default Product