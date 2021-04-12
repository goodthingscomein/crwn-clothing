export const addItemToCart = (cartItems, cartItemToAdd) => {

    // check if the cart item exists
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    // if the cart item exists, we want to increment the quantity
    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
    }

    // if the item doesnt exist, we want to add the cart item with a quantity of 1
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    // check if the cart item exists
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    
    // if the quantity is 1, we want to remove the item completely
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => 
            cartItem.id !== cartItemToRemove.id
        )
    }

    // if the cart item quantity is greater than 1, we want to decrement the quantity
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
}