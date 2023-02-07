import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    accessToken: undefined,
    user: undefined,
};

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
        },
    }
});

export const { userLoggedIn, userLoggedOut } = loginSlice.actions;
export default loginSlice.reducer;