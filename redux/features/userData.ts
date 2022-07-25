import { createSlice } from "@reduxjs/toolkit";

export interface UserSlice {}

const initialState: UserSlice = {};

const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {},
  },
});

export const {setUser} = userData.actions;

export default userData.reducer;
