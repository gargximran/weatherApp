import RadioButton from "./RadioButton";
import {useState} from "react";

const WeatherScreen = () => {

    const tempParams = [
        {
            label: 'Celsius',
            value: 'cel'
        },
        {
            label: 'Fahrenheit',
            value: 'fh'
        }
    ]

    const [activeParam, setActiveParam] = useState('cel')


    return (
        <div className="py-2 mt-5 w-full">
            <div className="grid grid-cols-4">
                <div className={'hidden md:block'}>

                </div>
                <RadioButton onClick={(v) => setActiveParam(v)} value={tempParams[0].value} label={tempParams[0].label} activeValue={activeParam}  />
                <RadioButton onClick={(v) => setActiveParam(v)} value={tempParams[1].value} label={tempParams[1].label} activeValue={activeParam}  />


                <div className="flex justify-center">h</div>
            </div>
        </div>
    )
}


export default WeatherScreen
