import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    addCategory: (state: any, action: any) => {
      state.push(action.payload);
    },
    deleteCategorySlice: (state, action) => {
      return state.filter((category: any) => category.id !== action.payload);
    },
  },
});

export const { addCategory, deleteCategorySlice } = categorySlice.actions;

export default categorySlice.reducer;
