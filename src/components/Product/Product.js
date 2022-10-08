import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name } = props.product;
    return (
        <div className='product'>
            <p>{name}</p>
        </div>
    );
};

export default Product;