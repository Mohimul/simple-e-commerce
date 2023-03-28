import React, { useEffect, useState } from 'react';
import Data from '../productsData/Data';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
  

    return (
        <div>
            <div className="container">
                <div className="products-container">
                    {
                        products.map(product => <Data key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Data>)
                    }
                </div>
                <div className="total-container">
                    <h1>Order Summery</h1>
                    <p>Selected Item: {cart.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Products;