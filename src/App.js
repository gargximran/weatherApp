import { useDispatch } from 'react-redux';
import { changeInnerWidth } from "./store/slices/utilsSlice";

import WeatherPage from "./pages/WeatherPage";
import {useEffect} from "react";


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        window.onresize = (e) => dispatch(changeInnerWidth(e.target.innerWidth))
        // eslint-disable-next-line
    }, [])


    return <WeatherPage />
}

export default App;
