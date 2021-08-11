import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

import WeatherScreenHeader from "./weatherScreenHeader";
import WeatherCardSlider from "./weatherCardSlider";
import {createRef} from "react";
import {changeCurrentIndex, slideTrackingData, selectItem} from "../store/slices/sliderTrackingSlice";
import {useDispatch, useSelector} from 'react-redux'
import {utilsData} from "../store/slices/utilsSlice";
import {weatherDataSelector} from "../store/slices/weatherSlice";


const WeatherScreen = () => {

    const slide = createRef()


    const dispatch = useDispatch();
    const {currentIndex} = useSelector(slideTrackingData)


    const {innerWidth} = useSelector(utilsData)


    const {data: allDays} = useSelector(weatherDataSelector)

    const countAllItemNumber = Object.keys(allDays).length;
    const lastIndexCount = innerWidth > 600 ? countAllItemNumber - 3 : Object.keys(allDays).length - 1


    return (
        <div className="py-2 mt-5 w-full">
            <WeatherScreenHeader
                nextSlide={() => slide.current.slickNext()}
                prevSlide={() => slide.current.slickPrev()}
            />

            <div className="grid grid-cols-12 mt-8 md:mt-16">
                <div className="col-span-2 flex justify-center items-center">

                        {
                            currentIndex !== 0 && (

                                <FaArrowAltCircleLeft
                                    size={40}
                                    className={'text-gray-800 cursor-pointer hidden md:inline'}
                                    onClick={() => slide.current.slickPrev()}
                                />


                            )
                        }


                </div>
                <div className="col-span-8">
                    <WeatherCardSlider
                        ref={slide}
                        onSelectOneSlide={item => dispatch(selectItem(item))}
                        afterChange={index => dispatch(changeCurrentIndex(index))}
                    />
                </div>
                <div className="col-span-2 flex justify-center items-center">
                    {
                        lastIndexCount !== currentIndex && (

                                <FaArrowAltCircleRight
                                    size={40}
                                    className={'text-gray-800 cursor-pointer hidden md:inline'}
                                    onClick={() => slide.current.slickNext()}
                                />

                        )
                    }

                </div>
            </div>


        </div>
    )
}


export default WeatherScreen
