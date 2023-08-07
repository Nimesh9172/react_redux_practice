import { createSlice } from "@reduxjs/toolkit";

const intialCartState = { cartItem: [], totalQuantity: 0 ,isChanged:false};

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: intialCartState,
  reducers: {
    replaceCart(state, action) {
      // console.log(action.payload)
      state.totalQuantity = action.payload.totalQuantity;
      state.cartItem = action.payload.items || [];
    },
    addItem(state, action) {
      const existingCartItemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cartItem[existingCartItemIndex];
      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
          total: existingCartItem.total + action.payload.price,
        };
        state.cartItem[existingCartItemIndex] = updatedCartItem;
      } else {
        const newItem = {
          ...action.payload,
          total: action.payload.price,
        };
        state.cartItem.push(newItem);
      }
      state.totalQuantity++;
      state.isChanged = true
    },
    removeItem(state, action) {
      const existingCartItemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );

      if (existingCartItemIndex === -1) {
        return;
      }

      const cartItem = state.cartItem[existingCartItemIndex];

      let updatedItems;

      if (cartItem.quantity === 1) {
        updatedItems = state.cartItem.filter(
          (item) => item.id !== action.payload
        );
      } else {
        const updatedItem = {
          ...cartItem,
          quantity: cartItem.quantity - 1,
          total: cartItem.total - cartItem.price,
        };
        updatedItems = [...state.cartItem];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      state.totalQuantity--;
      state.cartItem = updatedItems;
      state.isChanged = true

      // console.log(state, action.payload);
    },
  },
});


export default cartItemSlice;
export const cartItemActions = cartItemSlice.actions;
