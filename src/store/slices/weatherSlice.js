import {createSlice} from "@reduxjs/toolkit";



const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        loading: true,
        data: {}
    },
    reducers: {
        insertData: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        startLoading: state => {
            state.loading = true;
        }
    }
})


export default weatherSlice.reducer

export const {
    insertData,
    startLoading
} = weatherSlice.actions



export const weatherDataSelector = state => state.weather;
