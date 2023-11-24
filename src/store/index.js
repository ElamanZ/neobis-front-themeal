import {configureStore} from '@reduxjs/toolkit'
import randomFoodReducer from './foodSlice'
import foodDetailReducer from './foodDetailSlice'
import foodSearchReducer from './foodSearchSlice'



export const store = configureStore({
    reducer: {
        randomFoodReducer,
        foodDetailReducer,
        foodSearchReducer
    }
})