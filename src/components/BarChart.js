import {useSelector} from "react-redux";
import {slideTrackingData} from "../store/slices/sliderTrackingSlice";
import { VictoryChart, VictoryBar} from 'victory'
import {weatherDataSelector} from "../store/slices/weatherSlice";
import {kToC, kToF} from "../helpers/tempConverterFromKelvin";

const BarChart = () => {
    const { selectedItem} = useSelector(slideTrackingData);
    const { param } = useSelector(weatherDataSelector);




    const data = selectedItem?.inner?.map(value => {
        return {
            time: value.time < 12 ? value.time + ' am' : (value.time - 12) + ' pm',
            temp: param === 'c' ? kToC(value.temp): kToF(value.temp)
        }
    });




    return (
        <div className="container mx-auto mt-2">
            <p className="text-gray-600 font-roboto text-lg font-bold text-center py-3">
                {
                    selectedItem?.day ? selectedItem?.day  : 'Select a card to show bars!'
                }
            </p>

            <div className={'flex justify-center'}>
                <div className="mx-10 md:mx-0 md:w-1/4">
                    {
                        selectedItem?.day ? (
                            <VictoryChart

                            >
                                <VictoryBar
                                    data={data}
                                    alignment="start"
                                    animate={{duration: 300}}
                                    x="time"
                                    y="temp"
                                    labels={({ datum }) => param === 'c' ? datum.temp + 'C' : datum.temp + 'F'}


                                />

                            </VictoryChart>
                        ) : ''
                    }

                </div>

            </div>



        </div>
    )
}


export default BarChart
