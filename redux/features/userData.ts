import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {simplifyError} from "../../helpers/errorHelper";

export interface UserSlice {
  registerError: string
}

const initialState: UserSlice = {
  registerError: ''
};

const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }:PayloadAction<any>) => {
      console.log({payload})
    },
    setRegistrationError: (state, {payload}:PayloadAction<string>) => {
      state.registerError = simplifyError(payload);
    }
  },
});

export const {setUser, setRegistrationError} = userData.actions;

export default userData.reducer;
