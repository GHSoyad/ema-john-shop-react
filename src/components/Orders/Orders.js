import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { clearLocalStorage, removeFromLocalStorage, updateLocalStorageQuantity } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const cartItems = useLoaderData();
    const [cart, setCart] = useState(cartItems);

    const clearCart = () => {
        const newCart = [];
        setCart(newCart);
        clearLocalStorage();
    }

    const handleRemoveItem = id => {
        const remainingProducts = cart.filter(cartItem => cartItem.id !== id);
        setCart(remainingProducts);
        removeFromLocalStorage(id);
    }

    const handleItemCounter = (id, isIncrease) => {
        const cartItem = cart.find(item => item.id === id);
        const remainingProducts = cart.filter(item => item.id !== id);
        let newCart = [];

        if (isIncrease) {
            cartItem.quantity = cartItem.quantity + 1;
        } else {
            cartItem.quantity = cartItem.quantity - 1;
        }

        newCart = [...remainingProducts, cartItem];
        setCart(newCart);
        updateLocalStorageQuantity(id, cartItem.quantity);
    }

    return (
        <div className='review-orders-container'>
            <div className='review-items'>
                {
                    cart.map(cartItem => <ReviewItem key={cartItem.id} cartItem={cartItem} handleItemCounter={handleItemCounter} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
            </div>
            <div className='review-price'><Cart cart={cart} clearCart={clearCart}><Link to='/orders'><button className='review-order'>Checkout</button></Link></Cart></div>
        </div>
    );
};

export default Orders;