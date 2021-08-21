module.exports = {
    weatherUrl: (cord) => {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${ cord?.latitude || 23.8748577}&lon=${cord?.longitude || 90.3108413}&appid=cb67b0b43b262771545047a7125b9e04`;
    }
}
