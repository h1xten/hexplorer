import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import { MAINNET_API_URL, BALANCES } from '../config';

export const getAccountBalance = createAsyncThunk(
    'account/getAccountBalance',
    async function({account}, {rejectWithValue}) {
        try {
            const response = await axios.get(`${MAINNET_API_URL}${BALANCES}?account.id=${account}&order=asc&limit=1`)
            if(response.status !== 200){
                throw new Error('Server Error')
            }
            console.log(response.data)
            return response.data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        account: null,
        balance: null,
        tokens: null,
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: {
        [getAccountBalance.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAccountBalance.fulfilled]: (state, action) => {
            state.account = action.payload.balances[0].account;
            state.balance = action.payload.balances[0].balance
            state.tokens = action.payload.gibalances[0].tokens
            
            state.status = 'resolved';
            state.error = null
        },
        [getAccountBalance.rejected]: (state, action) => {
            state.status = 'rejected';
            state.account = null;
            state.tokens = null;
            state.error = action.payload
        }
    }
})

export default addressSlice.reducer