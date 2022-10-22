const sortAlphabetically = cartItems => {
    const sortedCartItems = cartItems.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    });

    return sortedCartItems;
}

const sortQuantity = cartItems => {
    const sortedCartItems = cartItems.sort((a, b) => {
        return b.quantity - a.quantity;
    });
    return sortedCartItems;
}

const sortPrice = cartItems => {
    const sortedCartItems = cartItems.sort((a, b) => {
        return b.price - a.price;
    })
    return sortedCartItems;
}

export { sortAlphabetically, sortQuantity, sortPrice };