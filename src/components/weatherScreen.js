import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

import WeatherScreenHeader from "./weatherScreenHeader";
import WeatherCardSlider from "./weatherCardSlider";
import {createRef} from "react";


const WeatherScreen = () => {

    const slide = createRef()


    return (
        <div className="py-2 mt-5 w-full">
            <WeatherScreenHeader
                nextSlide={() => slide.current.slickNext()}
                prevSlide={() => slide.current.slickPrev()}
            />

            <div className="grid grid-cols-12 mt-8 md:mt-16">
                <div className="col-span-2 flex justify-center items-center">
                    <FaArrowAltCircleLeft size={40} className={'text-gray-800 cursor-pointer hidden md:inline'}
                                          onClick={() => slide.current.slickPrev()}/>
                </div>
                <div className="col-span-8">
                    <WeatherCardSlider ref={slide}/>
                </div>
                <div className="col-span-2 flex justify-center items-center">
                    <FaArrowAltCircleRight size={40} className={'text-gray-800 cursor-pointer hidden md:inline'}
                                           onClick={() => slide.current.slickNext()}/>
                </div>
            </div>


        </div>
    )
}


export default WeatherScreen
