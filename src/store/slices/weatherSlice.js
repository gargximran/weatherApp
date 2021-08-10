import {createSlice} from "@reduxjs/toolkit";



const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        loading: true,
        data: {},
        param: 'c'
    },
    reducers: {
        insertData: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        startLoading: state => {
            state.loading = true;
        },
        changeParam: (state, action) => {
            state.param = action.payload;
        }
    }
})


export default weatherSlice.reducer

export const {
    insertData,
    startLoading,
    changeParam
} = weatherSlice.actions



export const weatherDataSelector = state => state.weather;
