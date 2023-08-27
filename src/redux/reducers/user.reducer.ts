import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../stores';
import { AuthUserInterface } from '../../interfaces';

const initialState: AuthUserInterface = {
    _id: null,
    username: null,
    email: null,
    role: null,
    token: null,
};

export const appUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserInfo: (state, action) => {
            state._id = action.payload._id;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.token = action.payload.token;
        },
        clearUser: () => initialState,
    },
});

// User Selectors
export const tokenSelector = (state: RootState) => state.user.token;
export const usernameSelector = (state: RootState) => state.user.username;
export const roleSelector = (state: RootState) => state.user.role;
export const userSelector = (state: RootState) => state.user;

export const { updateUserInfo, clearUser } = appUserSlice.actions;

export default appUserSlice.reducer;
