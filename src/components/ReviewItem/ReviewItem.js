import React from 'react';
import './ReviewItem.css';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa'

const ReviewItem = ({ cartItem, handleRemoveItem, handleItemCounter }) => {
    const { id, name, img, price, quantity } = cartItem;
    // if (quantity === 0) {
    //     handleRemoveItem(id);
    // }

    return (
        <div className='review-item'>
            <div className='review-item-details'>
                <img src={img} alt=""></img>
                <div className='review-item-info'>
                    <h4>{name}</h4>
                    <p className='bold'>Price: ${price}</p>
                    <div className='item-counter'>
                        <button className='success' onClick={() => handleItemCounter(id, true)}><FaPlus></FaPlus></button>
                        <p className='bold'>{quantity}</p>
                        <button className='fail' id={id} onClick={() => handleItemCounter(id, false)} disabled={quantity === 0 ? true : false}><FaMinus></FaMinus></button>
                    </div>
                </div>
            </div>
            <button onClick={() => handleRemoveItem(id)} className='btn-delete'><FaTrashAlt></FaTrashAlt></button>
        </div>
    );
};

export default ReviewItem;