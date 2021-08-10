import RadioButton from "./RadioButton";
import {changeParam, fetchWeatherInformation, weatherDataSelector} from "../store/slices/weatherSlice";
import {useDispatch, useSelector} from "react-redux";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";

const WeatherScreenHeader = ({prevSlide, nextSlide}) => {


    const dispatch = useDispatch();


    const { param: activeParam } = useSelector(weatherDataSelector)

    return (
        <div className="grid grid-cols-4">
            <div className={'hidden md:block'}>

            </div>
            <div className="col-span-2 md:col-span-1">
                <div className={'flex justify-start md:justify-center pl-4'}>
                    <RadioButton
                        onClick={(v) => dispatch(changeParam(v))}
                        value={'c'}
                        label={'Celsius'}
                        activeValue={activeParam}
                    />
                </div>
            </div>
            <div className="col-span-2 md:col-span-1">
                <div className="flex justify-end md:justify-center pr-4">
                    <RadioButton
                        onClick={(v) => dispatch(changeParam(v))}
                        value={'f'}
                        label={'Fahrenheit'}
                        activeValue={activeParam}
                    />
                </div>
            </div>


            <div className="flex justify-evenly md:justify-center md:col-span-1 col-span-4 py-8 md:py-0">
                <FaArrowAltCircleLeft
                    size={30}
                    className={'md:hidden text-gray-600 cursor-pointer'}
                    onClick={() => prevSlide && prevSlide()}
                />
                <button
                    onClick={() => dispatch(fetchWeatherInformation())}
                    className={'bg-gray-500 text-white focus:outline-none px-3 py-1 rounded shadow text-xl font-roboto'}
                >
                    Refresh
                </button>

                <FaArrowAltCircleRight
                    size={30}
                    className={'md:hidden text-gray-600 cursor-pointer'}
                    onClick={() => nextSlide && nextSlide()}
                />
            </div>
        </div>
    )
}

export default WeatherScreenHeader
