import UserActionTypes from "../ActionTypes/UserActionTypes";

const UserReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default UserReducer;
