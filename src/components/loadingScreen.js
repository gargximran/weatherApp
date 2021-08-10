import {BiLoader} from 'react-icons/bi'

const LoadingScreen = () => {




    return (
        <div className="flex h-full w-full items-center justify-center">
            <BiLoader className={'spinner text-6xl text-gray-600 md:text-8xl'} />
        </div>
    )


}

export default LoadingScreen
