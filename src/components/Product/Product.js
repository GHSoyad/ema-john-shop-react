import React from 'react';
import { Rating } from 'react-simple-star-rating';
import './Product.css'

const Product = ({ product, addToCart }) => {
    const { name, img, price, ratings } = product;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" onError={e => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'images/no-image.png'
                }} />
                <p className='bold primary product-name'>{name}</p>
            </div>
            <div>
                <div className='product-price'>
                    <p><span className='bold'>Price: $</span>{price}</p>
                    <Rating initialValue={ratings} readonly={true} size={18} allowFraction={true} />
                </div>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;