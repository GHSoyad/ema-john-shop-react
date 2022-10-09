import React from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = ({ products, addToCart }) => {

    return (
        <div className='products'>
            {
                products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
            }
        </div>
    );
};

export default Products;