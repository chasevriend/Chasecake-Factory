import React, { useContext, useState, createContext } from 'react'
import { useParams } from 'react-router';
import {items} from "../data/Data"
import { Link } from 'react-router-dom'
import "../css/Products.css"


const Shop = () => {
    
    return (
        <>
            <div className='products'>
                <div className='products__container'>
                    {items.map((item) => (
                        <div key={item.id} className="product">
                            <div className='product__header'>
                                <img src={item.img} alt="product" />
                            </div>
                            <p className='product__name'>{item.name}</p>
                            <div className='product__details'>
                                <p className='product__price'>${item.price}</p>
                                <span>
                                    <button className='products__btn'>
                                        Add To Cart
                                    </button>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Shop