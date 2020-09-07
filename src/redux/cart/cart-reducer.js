import { cartActionTypes } from './cart-action-types';
import { addItemToCart } from './cart-utils';

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
    default:
      return state;
  }
}

export default cartReducer;
