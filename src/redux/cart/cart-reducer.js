import { cartActionTypes } from './cart-action-types';

const initialState = {
  isHidden: true,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cartActionTypes.TOOGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    default:
      return state;
  }
}

export default cartReducer;
