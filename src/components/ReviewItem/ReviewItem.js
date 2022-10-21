import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ cartItem, handleRemoveItem }) => {
    const { id, name, img, price, quantity } = cartItem;
    return (
        <div className='review-item'>
            <img src={img} alt=""></img>
            <div>
                <h3>{name}</h3>
                <p>{quantity}</p>
                <p>{price}</p>
                <button onClick={() => handleRemoveItem(id)}>delete</button>
            </div>
        </div>
    );
};

export default ReviewItem;