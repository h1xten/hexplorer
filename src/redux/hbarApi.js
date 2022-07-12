import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const hbarApi = createApi({
    reducerPath: 'hbarApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.coingecko.com/api/v3/'}),
    endpoints: (builder) => ({
        getHbarInfo: builder.query({
            query: () => `simple/price?ids=hedera-hashgraph&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`,
            transformResponse: (response) => response['hedera-hashgraph']
        })
    })
});

export const {useGetHbarInfoQuery} = hbarApi;