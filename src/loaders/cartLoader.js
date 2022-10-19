import { getSavedCart } from "../utilities/localStorage";

export const cartLoader = async () => {

    const productsData = await fetch`products.json`;
    const products = await productsData.json();
    console.log(products)

    const savedCart = getSavedCart();
    const getCartItems = [];

    for (const id in savedCart) {
        const cartItem = products.find(product => product.id === id);
        if (cartItem) {
            const quantity = savedCart[id];
            cartItem.quantity = quantity;
            getCartItems.push(cartItem);
        }
    }

    return getCartItems;
}