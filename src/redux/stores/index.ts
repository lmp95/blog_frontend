import { Middleware, MiddlewareAPI, combineReducers, configureStore, isFulfilled, isRejectedWithValue } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { appStateReducer, userReducer } from '../reducers';
import { appApi } from '../api';
import { toast } from 'react-toastify';

const reducers = combineReducers({
    user: userReducer,
    appState: appStateReducer,
    [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const apiError: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
        toast.error(action?.payload?.data?.message || 'Something Wrong!');
    }
    return next(action);
};

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
            .concat(appApi.middleware)
            .concat(apiError),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
