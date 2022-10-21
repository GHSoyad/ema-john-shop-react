import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { clearLocalStorage, removeFromLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const cartItems = useLoaderData();
    const [cart, setCart] = useState(cartItems);
    console.log(cart)

    const clearCart = () => {
        const newCart = [];
        setCart(newCart);
        clearLocalStorage();
    }

    const handleRemoveItem = (id) => {
        const remainingProducts = cart.filter(cartItem => cartItem.id !== id);
        setCart(remainingProducts);
        removeFromLocalStorage(id);
    }

    return (
        <div className='review-orders-container'>
            <div className='review-items'>
                {
                    cart.map(cartItem => <ReviewItem key={cartItem.id} cartItem={cartItem} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
            </div>
            <div className='review-price'><Cart cart={cart} clearCart={clearCart}><Link to='/orders'><button className='review-order'>Checkout</button></Link></Cart></div>
        </div>
    );
};

export default Orders;