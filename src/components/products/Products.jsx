import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Products;