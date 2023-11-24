import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const getFoodsDetails = createAsyncThunk(
    'getFoodsDetails',
    async function (id, { dispatch, rejectWithValue }) {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);

            if (response.status === 200) {
                return response.data;
            } else {
                throw Error(`Error ${response.status}`);
            }
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);



const foodDetailsSlice = createSlice({
    name: 'foodDetailsSlice',
    initialState: {
        food: {},
        error: ''
    },
    extraReducers: builder =>  {
        builder.addCase(getFoodsDetails.fulfilled, (state, action) => {
            state.food = action.payload
        })
        builder.addCase(getFoodsDetails.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})


export default  foodDetailsSlice.reducer
