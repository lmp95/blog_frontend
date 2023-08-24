import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../stores';
import { AppStateInterface } from '../../interfaces';

const initialState: AppStateInterface = {
    loading: false,
    alertDialog: {
        isShow: false,
        message: null,
    },
    sidebar: false,
    tab: 'Menu',
};

export const appStateSlice = createSlice({
    initialState,
    name: 'appState',
    reducers: {
        updateLoading: (state, action) => {
            state.loading = action.payload;
        },
        updateAlertDialog: (state, action) => {
            state.alertDialog = action.payload;
        },
        updateTab: (state, action) => {
            state.tab = action.payload;
        },
    },
});

// App State Selectors
export const loadingSelector = (state: RootState) => state.appState.loading;
export const alertDialogSelector = (state: RootState) => state.appState.alertDialog;
export const sidebarSelector = (state: RootState) => state.appState.sidebar;
export const tabSelector = (state: RootState) => state.appState.tab;

export const { updateLoading, updateAlertDialog, updateTab } = appStateSlice.actions;

export default appStateSlice.reducer;
