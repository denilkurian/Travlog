import '../css/travelpoint.css';
import travelpoint from '../images/Group 9238.jpg'
import coupon from '../images/Frame 50.jpg'

import holiday_ad from '../images/Frame 40.jpg'
import hotel_ad from '../images/Frame 41.png'
import airlines_ad from '../images/Frame 42.jpg'
import customer_ad from '../images/Frame 43.jpg'





const TravelPoint = () => {

    return (

        <>
            <br /><br />
            <div className="flex flex-row  flex-wrap mx-auto px-4 sm:px-6 lg:px-8 max-w-9xl gap-12">
                <img className='md:mx-auto md:w-3/4 lg:w-2/4 lg:h-1/5' src={travelpoint} alt="Travel Point" />

                <div className='flex flex-col lg:w-2/5 mx-auto'>
                    <h1 className='services-header mb-3 lg:text-left mx-auto'>TRAVEL POINT</h1>
                    <h1 className='services-paragraph lg:w-4/5 mb-7 lg:text-left mx-auto'>We help you find your dream location</h1>
                    <p className='text-paragraph lg:w-4/5 mx-auto'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                    <img data-aos="zoom-in" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="600" className='coupon mx-auto' src={coupon} alt="Coupon" />

                    <div className="flex flex-row flex-wrap gap-3 mt-0">
                    <img data-aos="fade-right" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="600" className='mx-auto lg:w-2/5' src={holiday_ad} alt="Holiday Ad 1" />
                        <img data-aos="fade-left" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="600" className='mx-auto lg:w-2/5' src={holiday_ad} alt="Holiday Ad 2" />
                        <img data-aos="fade-right" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="600" className='mx-auto lg:w-2/5 ' src={airlines_ad} alt="Holiday Ad 3" />
                        <img data-aos="fade-left" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="600" className='mx-auto lg:w-2/5 ' src={customer_ad} alt="Holiday Ad 4" />

             
                    </div>
                </div>

            </div>

        </>
    )
}


export default TravelPoint

