export const kToC = (temp) => {
    const converted = temp - 273.15
    return converted.toFixed();
}


export const kToF = (temp) => {
    const converted = (temp - 273.15) * 9/5 + 32;
    return converted.toFixed()
}
