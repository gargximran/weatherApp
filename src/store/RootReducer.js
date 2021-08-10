import { combineReducers } from '@reduxjs/toolkit'
import weatherReducer from "./slices/weatherSlice";


const RootReducer = combineReducers({
    weather: weatherReducer
})



export default RootReducer
