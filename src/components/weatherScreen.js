import { useDispatch, useSelector } from 'react-redux';
import {changeParam, weatherDataSelector, fetchWeatherInformation} from "../store/slices/weatherSlice";



import RadioButton from "./RadioButton";


const WeatherScreen = () => {

    const dispatch = useDispatch();


    const tempParams = [
        {
            label: 'Celsius',
            value: 'c'
        },
        {
            label: 'Fahrenheit',
            value: 'f'
        }
    ]

    const { param:activeParam } = useSelector(weatherDataSelector)




    return (
        <div className="py-2 mt-5 w-full">
            <div className="grid grid-cols-4">
                <div className={'hidden md:block'}>

                </div>
                <div className="col-span-2 md:col-span-1">
                    <div className={'flex justify-start md:justify-center pl-4'}>
                        <RadioButton onClick={(v) => dispatch(changeParam(v))} value={tempParams[0].value} label={tempParams[0].label} activeValue={activeParam}  />
                    </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <div className="flex justify-end md:justify-center pr-4">
                        <RadioButton onClick={(v) => dispatch(changeParam(v))} value={tempParams[1].value} label={tempParams[1].label} activeValue={activeParam}  />
                    </div>
                </div>


                <div className="flex justify-evenly md:justify-center md:col-span-1 col-span-4 py-8 md:py-0">
                    <button onClick={() => dispatch(fetchWeatherInformation())} className={'bg-gray-500 text-white focus:outline-none px-3 py-1 rounded shadow text-xl font-roboto'}>Refresh</button>
                </div>
            </div>
        </div>
    )
}


export default WeatherScreen
