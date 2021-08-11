import RadioButton from "./RadioButton";
import {changeParam, fetchWeatherInformation, weatherDataSelector} from "../store/slices/weatherSlice";
import {useDispatch, useSelector} from "react-redux";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
import {slideTrackingData} from "../store/slices/sliderTrackingSlice";
import { utilsData } from "../store/slices/utilsSlice";

const WeatherScreenHeader = ({prevSlide, nextSlide}) => {


    const dispatch = useDispatch();

    const { currentIndex } = useSelector(slideTrackingData)

    const { innerWidth } = useSelector(utilsData)



    const { param: activeParam, data: allDays } = useSelector(weatherDataSelector)

    const countAllItemNumber = Object.keys(allDays).length;
    const lastIndexCount = innerWidth > 600 ? countAllItemNumber - 2 : Object.keys(allDays).length - 1

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


            <div className="flex justify-evenly md:justify-start md:col-span-1 col-span-4 py-8 md:py-0">

                {
                    currentIndex !== 0 ? (
                        <FaArrowAltCircleLeft
                            size={30}
                            className={'md:hidden text-gray-600 cursor-pointer'}
                            onClick={() => prevSlide && prevSlide()}
                        />
                    ) : <FaArrowAltCircleLeft
                        size={30}
                        className={'opacity-0 md:hidden'}

                    />
                }

                <button
                    onClick={() => dispatch(fetchWeatherInformation())}
                    className={'bg-gray-500 text-white focus:outline-none px-3 py-1 rounded shadow text-xl font-roboto'}
                >
                    Refresh
                </button>

                {
                    lastIndexCount === currentIndex ? (
                        <FaArrowAltCircleRight
                            size={30}
                            className={'md:hidden opacity-0'}
                        />
                    ) : (
                        <FaArrowAltCircleRight
                            size={30}
                            className={'md:hidden text-gray-600 cursor-pointer'}
                            onClick={() => nextSlide && nextSlide()}
                        />
                    )
                }


            </div>
        </div>
    )
}

export default WeatherScreenHeader
