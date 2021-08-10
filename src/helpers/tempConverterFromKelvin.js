export const kToC = (temp) => {
    return temp - 273.15;
}


export const kToF = (temp) => {
    const converted = (temp - 273.15) * 9/5 + 32;
    return converted.toFixed()
}
