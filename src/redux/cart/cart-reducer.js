import { cartActionTypes } from './cart-action-types';
import { addItemToCart, removeItemFromCart } from './cart-utils';

const initialState = {
  isHidden: true,
  cartItems: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case cartActionTypes.ADD_ITEM :
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM :
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_ITEM_FROM_CART :
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default cartReducer;
