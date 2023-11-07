import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface CategoryState {
  categories: any;
}

const initialState: CategoryState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategoriesThunk.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const getCategoriesThunk = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = await axios.get("/api/category");
    return response.data;
  }
);

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
