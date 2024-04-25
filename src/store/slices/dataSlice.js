import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  open: true,
  sideBar: true,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.data = action.payload;
    },
    setOpenProfile: (state) => {
      state.open = !state.open;
    },
    setOpenSideBar: (state, action) => {
      state.sideBar = action.payload;
    },
  },
});

export const { setUserData, setOpenProfile, setOpenSideBar } =
  dataSlice.actions;

export default dataSlice.reducer;
