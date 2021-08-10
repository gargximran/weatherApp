import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import weatherService from "../../helpers/weatherService";
import weatherDataFormatter from "../../helpers/weatherDataFormatter";



export const fetchWeatherInformation = createAsyncThunk(
    'weather/fetchWeatherInformation',
    async () => {

            try{
                const weatherInfo = await weatherService();

                return weatherDataFormatter(weatherInfo)

            }catch(e) {
                return {}
            }

    }
)



const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        loading: true,
        data: {},
        param: 'c'
    },
    reducers: {
        changeParam: (state, action) => {
            state.param = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchWeatherInformation.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })

        builder.addCase(fetchWeatherInformation.pending, (state, action) => {
            state.loading = true;
        })
    }

})


export default weatherSlice.reducer

export const {
    changeParam,
} = weatherSlice.actions



export const weatherDataSelector = state => state.weather;
