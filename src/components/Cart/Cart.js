import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearCart, children }) => {
    const quantity = cart.reduce((a, b) => a + b.quantity, 0);
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }
    const tax = (total * .1).toFixed(2);
    const shipping = total ? 20 : 0;
    const grandTotal = (total + parseFloat(tax) + shipping).toFixed(2);
    return (
        <div className='cart'>
            <div className='inner-cart'>
                <p className='bold'>Order Summary</p>
                <p><span className='bold'>Total Items: </span>{quantity}</p>
                <p><span className='bold'>Total Price: </span>${total}</p>
                <p><span className='bold'>Tax: </span>${tax}</p>
                <p><span className='bold'>Shipping: </span>${shipping}</p>
                <p><span className='bold'>Grand Total: </span>${grandTotal}</p>
                <button onClick={clearCart} className='clear-cart'>Clear Cart</button>
                {children}
            </div>
        </div>
    );
};

export default Cart;