import {useSelector} from "react-redux";
import {slideTrackingData} from "../store/slices/sliderTrackingSlice";
import {weatherDataSelector} from "../store/slices/weatherSlice";
import {kToC, kToF} from "../helpers/tempConverterFromKelvin";
import Chart from "react-google-charts";
import {utilsData} from "../store/slices/utilsSlice";

const BarChart = () => {
    const {selectedItem} = useSelector(slideTrackingData);
    const {param} = useSelector(weatherDataSelector);
    const {innerWidth} = useSelector(utilsData)


    const data = selectedItem?.inner?.map((value, index) => {
        return [
            innerWidth <= 600 ? value.time.toString() : (
                value.time <= 11 ? `${value.time === 0 ? '12' : value.time}:00 am` : `${value.time === 12 ? '12' :  value.time - 12}:00 pm`
            ),
            param === 'c' ? kToC(value.temp) + '°C' : kToF(value.temp) + '°F'
        ]
    });


    const data2 = selectedItem?.day && [
        ["Time", "Temp"],
        ...data
    ]


    return (
        <div className="container mx-auto mt-2">
            <p className="text-gray-600 font-roboto text-sm font-bold pl-5 pt-3">
                {
                    selectedItem?.day ? selectedItem?.day : 'Select a card to show bars!'
                }
            </p>

            <div>
                <div className="px-5">
                    {
                        selectedItem?.day && (
                            <Chart
                            chartType="Bar"
                            width="100%"
                            height={250}
                            data={data2}
                            options={
                                {
                                    title: selectedItem?.day,
                                    colors: ['#6b7280', '#6b7280'],
                                    animation: {
                                        duration: 1000,
                                        easing: 'out',
                                        startup: true,
                                    }
                                }
                            }
                            />)
                    }

                </div>

            </div>


        </div>
    )
}


export default BarChart
