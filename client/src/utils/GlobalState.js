// import React, { createContext, useContext } from "react";
 import React from "react";
// import { useProductReducer } from './reducers'
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./store";

export function StoreProvider(props) {
  // Return the provider component provided by react-redux
  return <Provider store={store} {...props} />;
}

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useProductReducer({
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
