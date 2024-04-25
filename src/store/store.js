import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./slices";

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export default store;
