import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    },
    deleteCategory: (state, action) => {
      return state.filter((category: any) => category.id !== action.payload);
    },
    addCategory: (state, action: { payload: any }) => {
      // state.push(action.payload);
    },
  },
});

export const { deleteCategory, setCategories, addCategory } =
  categorySlice.actions;

export default categorySlice.reducer;
