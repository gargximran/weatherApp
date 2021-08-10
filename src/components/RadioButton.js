
const RadioButton = ({value, onClick, label, activeValue}) => {
    return (
        <div className="inline-flex items-center">
            <div onClick={() => onClick(value)} className={`transition-all duration-500 transform w-6 h-6 rounded-full border-2 border-black ${activeValue === value ? 'bg-black' : 'bg-white'} flex justify-center items-center`}>
                <div className="w-2 h-2 rounded-full bg-white transition-all duration-300"></div>
            </div>
            <p onClick={() => onClick(value)} className={'pl-2 cursor-pointer text-lg font-bold  text-gray-800 font-roboto'}>{label}</p>
        </div>
    )
}

export default RadioButton
