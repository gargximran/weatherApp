import axios from 'axios'
import {weatherUrl} from './env'

const weatherService = () => (
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(({coords}) => {
            if(coords){
                axios.get(weatherUrl(coords))
                    .then(res => resolve(res.data))
                    .catch(err => reject(err.response.data))
            }
        })

    })
)

export default weatherService
