
import keyfeature from '../images/BACKGROUND.jpg'

import offer from "../images/Frame 40.png"
import shedule from '../images/Frame 41(1).png'
import discount from '../images/Frame 42.png'



const Features = () => {

    return (
        <>

            <br /><br /><br /><br /><br /><br />
            <div className="flex lg:flex-row flex-col-reverse  flex-wrap mx-auto px-4 sm:px-6 lg:px-8 max-w-9xl gap-12">

                <div className='flex flex-col lg:w-2/5 mx-auto'>
                    <h1 className='services-header mb-3 lg:text-left mx-auto'>KEY FEATURES</h1>
                    <h1 className='services-paragraph lg:w-4/5 mb-7 lg:text-left mx-auto'>We offer best services</h1>
                    <p className='text-paragraph lg:w-4/5 mx-auto'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>


                    <div className="flex flex-row flex-wrap gap-3 mt-0 py-6">
                        <img data-aos="fade-up" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="200" className='mx-auto lg:w-4/5' src={offer} alt="Holiday Ad 1" />
                        <img data-aos="fade-up" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="400" className='mx-auto lg:w-4/5' src={shedule} alt="Holiday Ad 1" />
                        <img data-aos="fade-up" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="600" className='mx-auto lg:w-4/5' src={discount} alt="Holiday Ad 1" />
                    </div>
                </div>

                <img className='lg:w-2/5 md:mx-auto md:w-3/5 md:mx-auto' src={keyfeature} alt="Travel Point" />

            </div>
            <br /><br /><br /><br />

        </>
    )
}



export default Features


