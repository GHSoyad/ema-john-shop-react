import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart)
    const total = cart.reduce((a, b) => a + b.price, 0);
    const tax = (total * .1).toFixed(2);
    const shipping = 20;
    const grandTotal = (total + parseFloat(tax) + shipping).toFixed(2);
    return (
        <div className='cart'>
            <div className='inner-cart'>
                <p><span className='bold'>Total Items: </span>${cart.length}</p>
                <p><span className='bold'>Total Price: </span>${total}</p>
                <p><span className='bold'>Tax: </span>${tax}</p>
                <p><span className='bold'>Shipping: </span>${total ? shipping : 0}</p>
                <p><span className='bold'>Grand Total: </span>${grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart; <p>This is cart</p>