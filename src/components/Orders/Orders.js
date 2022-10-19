import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Orders.css'

const Orders = () => {

    const getCartItems = useLoaderData();

    return (
        <div className='review-orders-container'>
            <div className='review-items'>items {getCartItems.length}</div>
            <div className='review-price'>calculation</div>
        </div>
    );
};

export default Orders;