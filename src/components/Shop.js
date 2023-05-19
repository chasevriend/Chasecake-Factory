import React, { useContext, useState, createContext } from 'react'
import { useParams } from 'react-router';
import { items, getItemData } from "../data/Data"
import { Link } from 'react-router-dom'
import "../css/Products.css"
import { CartContext } from '../context/CartContext';
import Product from './Product';

// const createProduct = (itemsTerm) => {
//     return (
//         <Product
//             key={itemsTerm.id}
//             category={itemsTerm.category}
//             flavor={itemsTerm.flavor}
//             img={itemsTerm.img}
//             name={itemsTerm.name}
//             price={itemsTerm.price}
//         />
//     )
// }

const Shop = () => {
    // const product = props.product;
    // const cart = useContext(CartContext);
    // const productQuantity = cart.getProductQuantity(product.id);
    // console.log(cart.item);

    const array = [
        { id: 1, name: 'Object 1' },
        { id: 2, name: 'Object 2' },
        { id: 3, name: 'Object 3' }
    ]
    
    const [selectedId, setSelectedId] = useState(null)

    const handleClick = (id) => {
        setSelectedId(id);
    }

    return (
        // <>
        //     <div className='products'>
        //         <p>Selected Id: {selectedId}</p>
        //         <div className='products__container'>
        //             {/* {items.map(createProduct)} */}
        //             {array.map(obj => (
        //                 <div className='product' key={obj.id}>
        //                     <p>{obj.name}</p>
        //                     <p>{obj.id}</p>
        //                     <button onClick={() => handleClick(obj.id)}>CLick</button>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </>
        <>
            <div className='products__container'>
            <p>Selected Id: {selectedId}</p>
                <div className='products'>
                    {items.map(item => (
                        <div key={item.id} className="product">
                            <div className='product__header'>
                                <img src={item.img} alt="product" />
                            </div>
                            <p className='product__name'>{item.name}</p>
                            <div className='product__details'>
                                <p className='product__price'>${item.price}</p>
                                <span>
                                    <button className='products__btn' onClick={() => handleClick(item.id)}>
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
