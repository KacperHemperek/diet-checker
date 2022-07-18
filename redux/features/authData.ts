import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AccessToken {
    access_token: string;
    expires_in: number;
    scope: string;
    token_type: string;
}

export interface AuthState {
    accessToken: string;
    expiresIn: number;
    tokenType: string;
    scope: string;
}

const initialState: AuthState = {
    accessToken: "",
    expiresIn: 0,
    tokenType: "",
    scope: "",
};

let authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getAuthAccesToken: (state) => {
            console.log({ ...state });
        },
        updateData: function (state, { payload }: PayloadAction<AccessToken>) {
            console.log(payload);
            state = {
                accessToken: payload.access_token,
                expiresIn: payload.expires_in,
                scope: payload.scope,
                tokenType: payload.token_type,
            };
        },
    },
});

export const { getAuthAccesToken, updateData } = authSlice.actions;

export default authSlice.reducer;
