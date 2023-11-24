import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const getFoodSearch = createAsyncThunk(
    'getFoodSearch',
    async function (value, { dispatch, rejectWithValue }) {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);

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



const foodSearchSlice = createSlice({
    name: 'foodSearchSlice',
    initialState: {
        foodSearch: [],
        error: ''
    },
    extraReducers: builder =>  {
        builder.addCase(getFoodSearch.fulfilled, (state, action) => {
            state.foodSearch = action.payload
        })
        builder.addCase(getFoodSearch.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})


export default  foodSearchSlice.reducer
