import SHOP_DATA from './data';

const initialState = {
  collections: SHOP_DATA,
};

function shopReducer(state = initialState, action) {
  switch (action.type) {
    default :
      return state;
  }
}

export default shopReducer;
