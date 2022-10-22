import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { clearLocalStorage, removeFromLocalStorage, updateLocalStorageQuantity } from '../../utilities/localStorage';
import { sortAlphabetically, sortPrice, sortQuantity } from '../../utilities/sortCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {

    let cartItems = useLoaderData();
    const [selectedOrder, setSelectedOrder] = useState('');
    cartItems = sortAlphabetically(cartItems);
    const [cart, setCart] = useState(cartItems);

    const handleSelected = (unsortedCart, event) => {
        let selected = selectedOrder;

        if (event) {
            selected = event.target.value;
        }
        setSelectedOrder(selected);

        let sortedCart = [];

        if (selected === 'quantity') {
            const getSortedCart = sortQuantity(unsortedCart);
            sortedCart = [...getSortedCart];
        } else if (selected === 'price') {
            const getSortedCart = sortPrice(unsortedCart);
            sortedCart = [...getSortedCart];
        } else {
            const getSortedCart = sortedCart = sortAlphabetically(unsortedCart);
            sortedCart = [...getSortedCart];
        }

        setCart(sortedCart);
    }


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
        handleSelected(newCart);
        updateLocalStorageQuantity(id, cartItem.quantity);
    }

    return (
        <div className='review-orders-container'>
            <div className='review-items'>
                <div>
                    <select className='sort-select' name="sort-items" value={selectedOrder} onChange={(e) => handleSelected(cart, e)}>
                        <option value="alpha">Alphabetically</option>
                        <option value="quantity">Quantity</option>
                        <option value="price">Price</option>
                    </select>
                </div>
                {
                    cart.map(cartItem => <ReviewItem key={cartItem.id} cartItem={cartItem} handleItemCounter={handleItemCounter} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
            </div>
            <Cart cart={cart} clearCart={clearCart}><Link to='/orders'><button className='review-order'>Checkout</button></Link></Cart>
        </div>
    );
};

export default Orders;