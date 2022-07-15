import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import { hbarApi } from './hbarApi'
import { hederaApi } from './hederaApi';
import { netSlice } from './netSlice';

const rootReducer = combineReducers({
    [hbarApi.reducerPath]: hbarApi.reducer,
    [hederaApi.reducerPath]: hederaApi.reducer,
    [netSlice.name]: netSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hbarApi.middleware, hederaApi.middleware)
});

setupListeners(store.dispatch)