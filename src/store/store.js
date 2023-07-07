import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataslice";
const store = configureStore({
    reducer: {
      data: dataSlice,
    },
  });
export default store;
