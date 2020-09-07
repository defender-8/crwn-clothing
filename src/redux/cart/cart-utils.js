export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isCartItemExist = cartItems.find(item => item.id === cartItemToAdd.id);

  if (isCartItemExist) {
    return cartItems.map(item => (item.id === cartItemToAdd.id) ? {
      ...item,
      quantity: item.quantity + 1,
    } : item);
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

/*export const addItemToCart = (cartItems, cartItemToAdd) => {
  const isCartItemExist = cartItems.find(item => item.id === cartItemToAdd.id);

  if (isCartItemExist) {
    const index = cartItems.findIndex(item => item.id === cartItemToAdd.id);
    cartItems[index].quantity += 1;
    return cartItems;
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};*/

