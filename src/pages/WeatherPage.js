import {useDispatch, useSelector} from "react-redux";
import {insertData, weatherDataSelector} from "../store/slices/weatherSlice";
import {useEffect} from "react";
import weatherService from "../helpers/weatherService";
import LoadingScreen from "../components/loadingScreen";
import WeatherScreen from "../components/weatherScreen";

// helper function
import weatherDataFormatter from '../helpers/weatherDataFormatter'


const WeatherPage = () => {
    const dispatch = useDispatch()
    const weatherData = useSelector(weatherDataSelector) // {loading, data}

    useEffect(() => {

        const fetchData = async () => {
            try{
                const weatherInfo = await weatherService();

                dispatch(insertData(weatherDataFormatter(weatherInfo)))


            }catch(e) {
                console.log(e)
            }
        }
        fetchData();

        // eslint-disable-next-line
    }, [])


    return (

        <div className={'container mx-auto h-screen overflow-hidden'}>
            {
                weatherData.loading ? <LoadingScreen/> : <WeatherScreen />
            }

        </div>

    );
};

export default WeatherPage
