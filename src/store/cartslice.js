import { createSlice } from "@reduxjs/toolkit";

let cartslice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addpruduct: (state, action) => {
      console.log("action.payload");
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.number;
    },
    deletepruduct: (state, action) => {
      console.log(action.payload);
      state.products = state.products.filter(
        (el) => el.id !== action.payload.id
      );
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.number;
    },
  },
});

export default cartslice.reducer;

export let { addpruduct, deletepruduct } = cartslice.actions;
