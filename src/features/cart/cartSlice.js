import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  entities: [],
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.entities.push(action.payload);
      state.totalPrice += action.payload.price;
    },
  },
});

export const { addToCart } = cartReducer.actions;
export default cartReducer.reducer;
