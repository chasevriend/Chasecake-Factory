import React, { useContext, useState, createContext } from 'react'
import { useParams } from 'react-router';
import { items, getItemData } from "../data/Data"
import { Link } from 'react-router-dom'
import "../css/Products.css"
import { CartContext } from '../context/CartContext';
import Product from './Product';


const Shop = (props) => {

    const product = props.product;
    const cart = useContext(CartContext);

    const handleSort = value => event => {
        console.log(value)
        cart.addOneToCart(product.id);
    }

    return (
        <>
            <div className='products'>
            {/* <p>{productQuantity}</p> */}
                <div className='products__container'>
                    {products.map(product => (
                        <div key={product.id} className="product">
                            <div className='product__header'>
                                <img src={product.img} alt="product" />
                            </div>
                            <p className='product__name'>{product.name}</p>
                            <div className='product__details'>
                                <p className='product__price'>${product.price}</p>
                                <span>
                                    <button className='products__btn' onClick={() => handleSort(product.id)} >
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
