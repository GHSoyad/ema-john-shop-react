import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, img, price, ratings } = props.product;
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
                    <p><span className='bold'>Rating: </span>{ratings}</p>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;