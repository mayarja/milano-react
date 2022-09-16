import { configureStore } from "@reduxjs/toolkit";
import cart from "./cartslice";
let store = configureStore({
  reducer: {
    cart,
  },
});

export default store;
