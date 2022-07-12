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
        }),
        getTransaction: builder.query({
            query: (id) => ({
                url: `/api/v1/transactions/${id}?nonce=0`
            }),
            transformResponse: (response) => response.transactions[0]
        }),
        getAccount: builder.query({
            query: (acc) => ({
                url: `/api/v1/accounts/${acc}`
            })
        }),
        getToken: builder.query({
            query: (token) => ({
                url: `/api/v1/tokens/${token}`
            })
        })
    })
})

export const {useGetTransactionsQuery, useGetSupplyQuery, useGetTransactionQuery, useGetAccountQuery, useGetTokenQuery} = hederaApi;