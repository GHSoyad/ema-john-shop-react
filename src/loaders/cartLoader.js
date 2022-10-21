import { getSavedCart } from "../utilities/localStorage";

export const cartLoader = async () => {

    const productsData = await fetch`products.json`;
    const products = await productsData.json();

    const savedCart = getSavedCart();
    const cartItems = [];

    for (const id in savedCart) {
        const cartItem = products.find(product => product.id === id);
        if (cartItem) {
            const quantity = savedCart[id];
            cartItem.quantity = quantity;
            cartItems.push(cartItem);
        }
    }

    return cartItems;
}