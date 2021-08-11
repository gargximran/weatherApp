import { createSlice } from '@reduxjs/toolkit'


const sliderTrackingSlice = createSlice({
    name: 'slide',
    initialState: {
        currentIndex: 0,
        selectedItem: {}
    },
    reducers: {
        changeCurrentIndex: (state, action) => {
            state.currentIndex  = action.payload;
        },
        selectItem: (state, action) => {
            state.selectedItem = action.payload;
        }
    }
});


export const {
    changeCurrentIndex,
    selectItem
} = sliderTrackingSlice.actions


export default sliderTrackingSlice.reducer


export const slideTrackingData = state => state.slide
