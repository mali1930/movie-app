import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  items: {},
};

try {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) initialState = cart;
} catch (err) {
  console.log(err);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.items[action.payload.id]) return;
      state.items[action.payload.id] = action.payload.amount;
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
    },
    changeProductAmount: (state, action) => {
      state.items[action.payload] = action.payload.amount;
    },
    incrementProductAmount: (state, action) => {
      state.items[action.payload] += 1;
    },
    decrementProductAmount: (state, action) => {
      state.items[action.payload] -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  removeFromCart,
  changeProductAmount,
  incrementProductAmount,
  decrementProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
