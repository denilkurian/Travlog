import booking from '../images/booking 1.jpg'
import cloudy from '../images/cloudy 1.jpg'
import destination from '../images/destination 1.jpg'
import '../css/services.css';




const Services = () => {

    return (
        <>
            <br /><br />
            <div className="containery mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row flex-wrap gap-8">

                    <div className="flex flex-wrap gap-0 w-full ">

                    <div className="service-container lg:w-1/5 text-center items-center lg:text-left ">
                            <h1 className='services-header mb-3'>SERVICES</h1>
                            <h1 className='services-paragraph'>Our top value categories for you </h1>
                        </div>

                        <div className="service-card bg-white rounded-lg shadow-lg w-full sm:max-w-xs sm:mr-5  lg:w-1/4 text-center border-2 rounded-2xl flex-shrink-0 mb-6 mx-auto">
                            <img className="w-16 h-16 mx-auto rounded-full m-8" src={destination} alt="Card image" />
                            <h3 className="text-xl font-semibold mt-4 m-6">Best Tour Guide</h3>
                            <p className="mt-2 text-gray-600 m-9">
                                What looked like a small patch of purple grass, above five feet.
                            </p>
                        </div>

                        <div className="service-card bg-white rounded-lg shadow-lg w-full sm:max-w-xs sm:w-1/2 sm:mr-7 md:w-2/4 lg:w-3/12 text-center border-2 rounded-2xl flex-shrink-0 mb-6 mx-auto">
                            <img className="w-16 h-16 mx-auto rounded-full m-8" src={booking} alt="Card image" />
                            <h3 className="text-xl font-semibold mt-4 m-6">Easy Booking</h3>
                            <p className="mt-2 text-gray-600 m-9">
                                Square, was moving across the sand in their direction.
                            </p>
                        </div>

                        <div className="service-card bg-white rounded-lg shadow-lg w-full sm:w-1/2 sm:mr-7 md:w-2/4 lg:w-3/12 text-center border-2 rounded-2xl flex-shrink-0 mb-6 mx-auto">
                            <img className="w-16 h-16 mx-auto rounded-full m-6" src={cloudy} alt="Card image" />
                            <h3 className="text-xl font-semibold mt-4 m-8">Weather Forecast</h3>
                            <p className="mt-2 text-gray-600 m-9">
                                What looked like a small patch of purple grass, above five feet.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br />
        </>
    )

}

export default Services

