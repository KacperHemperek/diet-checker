import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access_token: "",
  expires_in: 0,
  token_type: "",
  scope: "",
};

let authDataSlice = createSlice({
  name: "authData",
  initialState: initialState,
  reducers: {
    updateData: function (state, action) {},
  },
});

export default authDataSlice.reducer;
