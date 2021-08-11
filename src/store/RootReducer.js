import { combineReducers } from '@reduxjs/toolkit'
import weatherReducer from "./slices/weatherSlice";
import utilsReducer from './slices/utilsSlice'
import sliderTrackingReducer from "./slices/sliderTrackingSlice";


const RootReducer = combineReducers({
    weather: weatherReducer,
    utils: utilsReducer,
    slide: sliderTrackingReducer
})



export default RootReducer
