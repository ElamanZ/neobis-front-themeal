import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const getRandomFoods = createAsyncThunk(
    'getRandomFoods',
    async function (id, { dispatch, rejectWithValue }) {
        try {
            const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');

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


const randomFoodSlice = createSlice({
    name: 'randomFoodSlice',
    initialState: {
        food: [],
        error: ''
    },
    extraReducers: builder =>  {
        builder.addCase(getRandomFoods.fulfilled, (state, action) => {
            state.food = action.payload
        })
        builder.addCase(getRandomFoods.rejected, (state, action) => {
            state.error = action.payload
        })
    }
})

export default randomFoodSlice.reducer
