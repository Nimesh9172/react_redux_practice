import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import cartItemSlice from "./cart-items-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartItems:cartItemSlice.reducer
  },
});

export default store;
