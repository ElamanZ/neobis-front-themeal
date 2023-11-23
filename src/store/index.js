import {configureStore} from '@reduxjs/toolkit'
import randomFoodReducer from './foodSlice'
import foodDetailReducer from './foodDetailSlice'



export const store = configureStore({
    reducer: {
        randomFoodReducer,
        foodDetailReducer
    }
})