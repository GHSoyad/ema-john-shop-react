import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { saveToLocalStorage, getSavedCart, clearLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {

    const products = useLoaderData();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getSavedCart();
        const getCartItems = [];
        for (const id in savedCart) {
            const cartItem = products.find(product => product.id === id);
            if (cartItem) {
                cartItem.quantity = savedCart[id];
                getCartItems.push(cartItem);
            }
        }
        setCart(getCartItems);
    }, [products])


    const addToCart = selectedProduct => {
        const addedProduct = cart.find(product => product.id === selectedProduct.id)
        let newCart = [];
        console.log(addedProduct)
        if (!addedProduct) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        } else {
            const remainingProducts = cart.filter(product => product.id !== selectedProduct.id);
            selectedProduct.quantity = addedProduct.quantity + 1;
            newCart = [...remainingProducts, selectedProduct];
        }
        setCart(newCart);
        saveToLocalStorage(selectedProduct);
    }

    const clearCart = () => {
        const newCart = [];
        setCart(newCart);
        clearLocalStorage();
        console.log(cart)
    }

    return (
        <div className='shop'>
            <Products products={products} addToCart={addToCart}></Products>
            <Cart cart={cart} clearCart={clearCart}></Cart>
        </div>
    );
};

export default Shop;