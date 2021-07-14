import React, { createContext, useContext, useReducer } from "react";
import UserReducer from "./Reducers/UserReducer";
import UserInitialState from "./InitialStates/UserInitialState";
import CartReducer from "./Reducers/CartReducer";
import CartInitialState from "./InitialStates/CartInitialState";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(UserReducer, UserInitialState);
  const [cartState, cartDispatch] = useReducer(CartReducer, CartInitialState);

  return (
    <GlobalContext.Provider
      value={{
        userState,
        userDispatch,
        cartState,
        cartDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useUserStateValue = () => {
  const { userState, userDispatch } = useContext(GlobalContext);
  return [userState, userDispatch];
};

export const useCartStateValue = () => {
  const { cartState, cartDispatch } = useContext(GlobalContext);
  return [cartState, cartDispatch];
};

export default GlobalProvider;
