const saveToLocalStorage = (product) => {

    const savedCart = getSavedCart();

    const quantity = savedCart[product.id];

    if (quantity) {
        const newQuantity = quantity + 1;
        savedCart[product.id] = newQuantity;
    } else {
        savedCart[product.id] = 1;
    }

    localStorage.setItem('cart-items', JSON.stringify(savedCart));
}

const getSavedCart = () => {
    let savedCart = localStorage.getItem('cart-items');

    if (savedCart) {
        savedCart = JSON.parse(savedCart);
    } else {
        savedCart = {};
    }
    return savedCart;
}

const clearLocalStorage = () => {
    localStorage.removeItem('cart-items');
}

export { saveToLocalStorage, getSavedCart, clearLocalStorage };