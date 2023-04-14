import { createSlice } from "@reduxjs/toolkit";

export const sportsSlice = createSlice({
  name: "sports",
  initialState: {
    active: "Golf",
    categories: [],
    subcategories: ["driving", "approach", "putting"],
    subcategory: "driving",
    items: [],
    value: 0,
  },
  reducers: {
    updateActive: (state, action) => {
      state.active = action.payload;
    },
    updateCategories: (state, action) => {
      state.categories = action.payload;
    },
    updateSubCategories: (state, action) => {
      state.subcategories = action.payload;
    },
    updateSubCategory: (state, action) => {
      state.subcategory = action.payload;
    },
    updateItems: (state, action) => {
      state.items = action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  updateCategories,
  decrement,
  incrementByAmount,
  updateActive,
  updateSubCategories,
  updateSubCategory,
  updateItems,
} = sportsSlice.actions;

export default sportsSlice.reducer;
