import CartActionTypes from "../ActionTypes/CartActionTypes";

const CartReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case CartActionTypes.SET_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

export default CartReducer;
