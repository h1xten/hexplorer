import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query/react'
import { hbarApi } from './hbarApi'

export const store = configureStore({
    reducer: {
        [hbarApi.reducerPath]: hbarApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(hbarApi.middleware)
});

setupListeners(store.dispatch)