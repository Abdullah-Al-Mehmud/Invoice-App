import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  category: {},
  expences: {},
  amount: {
    subTotal: 0,
    tax: 0,
    totalPrice: 0,
  },
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setExpences: (state, action) => {
      state.expences = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

export const { setItems, setCategory, setAmount, setExpences } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;
