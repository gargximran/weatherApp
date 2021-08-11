import React from 'react'
import {kToC, kToF} from "../helpers/tempConverterFromKelvin";
import Slider from "react-slick";
import {useSelector} from "react-redux";
import {weatherDataSelector} from "../store/slices/weatherSlice";

const WeatherCardSlider = React.forwardRef(({ onSelectOneSlide, ...props}, ref) => {

    const weatherData = useSelector(weatherDataSelector)
    const allDayList = Object.keys(weatherData?.data)

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        accessibility: false,
        arrows: false,
        autoplay: false,
        swipeToSlide: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    };


    return (
        <Slider {...settings} {...props} ref={ref}>
            {
                allDayList.map(day => {

                    // make sum total day slide
                    const sumOfAllDayTemp = weatherData.data[day].allDayTemp.reduce((prev, current) => {
                        return prev + current
                    });
                    // make average
                    const averageTemp = sumOfAllDayTemp / weatherData.data[day].allDayTemp.length;

                    return (
                        <div key={day}>
                            <div  className={'flex justify-center items-center'} onClick={() => onSelectOneSlide && onSelectOneSlide({...weatherData.data[day], day})}>
                                <div className="w-64 bg-gray-200 shadow rounded p-4">
                                    <h2 className="text-lg md:text-xl font-roboto font-bold text-gray-700 text-center md:py-3 py-2">Temperature</h2>

                                    <div className="flex justify-around items-center my-2 md:my-4 py-2">
                                                    <span className={'font-roboto text-2xl md:text-4xl text-black font-bold'}>
                                                        {
                                                            weatherData.param === 'c' ? kToC(averageTemp) + '°C' : kToF(averageTemp) + '°F'
                                                        }
                                                    </span>

                                        <img className={'h-16'} src={`https://openweathermap.org/img/w/${weatherData.data[day].type}.png`} alt="weather icon"/>
                                    </div>

                                    <p className="text-gray-600 font-roboto text-lg md:text-lg font-bold text-center pb-2 pt-1 md:pt-2 md:pb-2">
                                        {
                                            day
                                        }
                                    </p>

                                </div>

                            </div>
                        </div>
                    )
                })
            }


        </Slider>
    )

})

export default WeatherCardSlider
