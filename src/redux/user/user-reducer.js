import userActionTypes from './user-action-types';

const initialState = {
  currentUser: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
