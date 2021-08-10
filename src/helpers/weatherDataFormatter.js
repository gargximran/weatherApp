const WeatherDataFormatter = (weatherInfo) => {
    const formattedData = {}

    weatherInfo.list.forEach(singlePart => {

        const DateForm = new Date(singlePart['dt_txt'])

        if(DateForm.toDateString() in formattedData){
            formattedData[DateForm.toDateString()] = {
                allDayTemp: [...formattedData[DateForm.toDateString()].allDayTemp, singlePart.main.temp],
                inner: {
                    ...formattedData[DateForm.toDateString()].inner,
                    [DateForm.getHours()]: singlePart.main.temp
                },
                type: formattedData[DateForm.toDateString()].type === singlePart.weather[0].icon ? singlePart.weather[0].icon : formattedData[DateForm.toDateString()].type
            }
        }else{
            formattedData[DateForm.toDateString()] = {
                allDayTemp: [singlePart.main.temp],
                inner: {
                    [DateForm.getHours()]: singlePart.main.temp
                },
                type: singlePart.weather[0].icon
            }
        }






    })

    return formattedData
}



export default WeatherDataFormatter
