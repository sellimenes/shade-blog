import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categoryReducer";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
  },
});

export default store;
