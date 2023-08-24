import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../stores';
import { UserInterface } from '../../interfaces';

const initialState: UserInterface = {
    token: null,
    username: null,
    role: null,
};

export const appUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserInfo: (state, action) => {
            state.token = action.payload.token;
            state.username = action.payload.email;
            state.role = action.payload.role;
        },
        clearUser: () => initialState,
    },
});

// User Selectors
export const tokenSelector = (state: RootState) => state.user.token;
export const usernameSelector = (state: RootState) => state.user.username;
export const roleSelector = (state: RootState) => state.user.role;

export const { updateUserInfo, clearUser } = appUserSlice.actions;

export default appUserSlice.reducer;
