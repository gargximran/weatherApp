import { createSlice } from '@reduxjs/toolkit'


const utilsSlice = createSlice({
    name: 'utils',
    initialState: {
        innerWidth: window.innerWidth
    },
    reducers: {
        changeInnerWidth: state => {
            state.innerWidth  = window.innerWidth;
        }
    }
});


export const {
    changeInnerWidth
} = utilsSlice.actions


export default utilsSlice.reducer


export const utilsData = state => state.utils
