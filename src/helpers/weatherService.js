import axios from 'axios'
import {weatherUrl} from './env'

const weatherService = () => (
    new Promise((resolve, reject) => {
        axios.get(weatherUrl)
            .then(res => resolve(res.data))
            .catch(err => reject(err.response.data))
    })
)

export default weatherService
