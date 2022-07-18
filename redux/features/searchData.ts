import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SearchSlice {
    value: string;
}

const initialState: SearchSlice = {
    value: "",
};

const searchData = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchValue: (state, { payload }: PayloadAction<string>) => {
            state.value = payload;
        },
    },
});

export const { setSearchValue } = searchData.actions;

export default searchData.reducer;
