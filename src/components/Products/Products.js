import React from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = ({ products }) => {

    return (
        <div className='products'>
            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default Products;