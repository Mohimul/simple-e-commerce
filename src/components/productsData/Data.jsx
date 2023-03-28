import React from 'react';
import './Data.css'

const Data = (props) => {
    

    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='all-product'>
            <img src={img} alt="" />

            <div className="products-info">
                <h6 className=' '>{name}</h6>
                <h4>Price: $ {price}</h4>
                <p>Seller: {seller}</p>
                <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={ () => handleAddToCart(props.product)} className='btn'>Add To Cart</button>

             
        </div>
    );
};

export default Data;