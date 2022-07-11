import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { MAINNET_API_URL } from '../config'

export const hederaApi = createApi({
    reducerPath: 'hederaApi',
    baseQuery: fetchBaseQuery({baseUrl: MAINNET_API_URL}),
    endpoints: (builder) => ({
        getTransactions: builder.query({
            query: () => ({
                url: '/api/v1/transactions',
                params: {
                    limit: 10,
                    order: 'desc'
                }
            }),
            transformResponse: (response) => response.transactions
        }),
        getSupply: builder.query({
            query: () => ({
                url: '/api/v1/network/supply'
            })
        })
    })
})

export const {useGetTransactionsQuery, useGetSupplyQuery} = hederaApi;