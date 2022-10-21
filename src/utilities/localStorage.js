const getSavedCart = () => {
    let savedCart = localStorage.getItem('cart-items');

    if (savedCart) {
        savedCart = JSON.parse(savedCart);
    } else {
        savedCart = {};
    }
    return savedCart;
}

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

const updateLocalStorageQuantity = (id, quantity) => {
    const savedCart = getSavedCart();

    savedCart[id] = quantity;

    localStorage.setItem('cart-items', JSON.stringify(savedCart));
}

const removeFromLocalStorage = (id) => {
    let savedCart = localStorage.getItem('cart-items');
    if (savedCart) {
        savedCart = JSON.parse(savedCart);
        if (id in savedCart) {
            delete savedCart[id];
            localStorage.setItem('cart-items', JSON.stringify(savedCart));
        }
    }
}

const clearLocalStorage = () => {
    localStorage.removeItem('cart-items');
}

export { saveToLocalStorage, getSavedCart, updateLocalStorageQuantity, removeFromLocalStorage, clearLocalStorage };