import {useDispatch, useSelector} from "react-redux";
import { weatherDataSelector, fetchWeatherInformation} from "../store/slices/weatherSlice";
import {useEffect} from "react";
import LoadingScreen from "../components/loadingScreen";
import WeatherScreen from "../components/weatherScreen";



const WeatherPage = () => {
    const dispatch = useDispatch()
    const weatherData = useSelector(weatherDataSelector) // {loading, data}

    useEffect(() => {

        dispatch(fetchWeatherInformation())

        // eslint-disable-next-line
    }, [])


    return (

        <div className={'container mx-auto h-screen'}>
            {
                weatherData.loading ? <LoadingScreen/> : <WeatherScreen />
            }

        </div>

    );
};

export default WeatherPage
