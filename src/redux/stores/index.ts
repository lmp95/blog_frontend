import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { appStateReducer, userReducer } from '../reducers';

const reducers = combineReducers({
    user: userReducer,
    // appState: appStateReducer,
    // [appApi.reducerPath]: appApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'appState'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    // .concat(appApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
