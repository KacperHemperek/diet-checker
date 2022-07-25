import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {simplifyError} from "../../helpers/errorHelper";

export interface UserSlice {
  registerError: string
  email: string
  verified: boolean
  uid: string
  loginError: string
}

const initialState: UserSlice = {
  registerError: '',
  email:"",
  verified: false,
  uid: "",
  loginError: ""
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
    },
    setLoginError: (state:UserSlice, {payload}:PayloadAction<string>) => {
      state.loginError = simplifyError(payload)
    }
  },
});

export const {setUser, setRegistrationError, setLoginError} = userData.actions;

export default userData.reducer;
