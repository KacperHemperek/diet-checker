import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {simplifyError} from "../../helpers/errorHelper";

export interface UserSlice {
  registerError: string
  email: string
  verified: boolean
  uid: string
}

const initialState: UserSlice = {
  registerError: '',
  email:"",
  verified: false,
  uid: "",
};

const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }:PayloadAction<any>) => {
      state.email = payload.email;
      state.verified = payload.emailVerified;
      state.uid = payload.uid;
      console.log({payload})
    },
    setRegistrationError: (state, {payload}:PayloadAction<string>) => {
      state.registerError = simplifyError(payload);
    }
  },
});

export const {setUser, setRegistrationError} = userData.actions;

export default userData.reducer;
