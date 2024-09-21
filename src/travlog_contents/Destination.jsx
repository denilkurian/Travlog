
import '../css/destination.css';
import right from '../images/Group 9236.jpg'
import left from '../images/Group 9237.jpg'


import beach from '../images/Rectangle 6.jpg'
import ocean from '../images/Rectangle 6(1).jpg'
import mountain from '../images/Rectangle 6.png'

import rating1 from '../images/Frame 30.png'
import rating2 from '../images/Frame 30(1).png'
import rating3 from '../images/Frame 30(2).png'


function Destination() {


    return (
        <>

            <br /><br /><br /><br />
            <div className="destination-container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                <div className='flex flex-col lg:flex-row '>
                    <div className=" w-full">
                        <h1 className='services-header mb-3'>TOP DESTINATION</h1>
                        <h1 className='services-paragraph'>Explore top destination</h1>
                    </div>


                    <div className='flex flex-col lg:flex-row gap-10'>
                        <img className='left-right-arrow' src={left} />
                        <img className='left-right-arrow' src={right} />

                    </div>
                </div>


                <br /><br />


                <div className="flex flex-col lg:flex-row flex-wrap gap-8">


                    <div data-aos="zoom-in" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="200" class="max-w-sm bg-white border border-gray-200  rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src={beach} alt="" />
                        </a>

                        <div class="p-6">

                            <div className='flex flex-col-reverse lg:flex-row gap-5'>
                                <h6 className="mb-2 text-2xl w-3/4 tracking-tight text-gray-900 dark:text-white w-15">Paradise Beach, Bantayan Island</h6>
                                <h5 className='dollar'>$ 550.19</h5>
                            </div>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rome Italy</p>
                            <img src={rating1} />
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="300" class="max-w-sm bg-white border border-gray-200  rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src={ocean} alt="" />
                        </a>
                        <div class="p-5">

                            <div className='flex flex-col-reverse lg:flex-row gap-6'>
                                <h5 class="mb-2 text-2xl w-3/4  tracking-tight text-gray-900 dark:text-white">Ocean with full of Colors</h5>
                                <h6 className='dollar'>$ 20.99</h6>
                            </div>


                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Maldives</p>
                            <img src={rating2} />
                        </div>
                    </div>


                    <div data-aos="zoom-in" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="400" class="max-w-sm bg-white border border-gray-200  rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src={mountain} alt="" />
                        </a>
                        <div class="p-5">
                            <div className='flex flex-col-reverse lg:flex-row gap-6'>
                                <h5 class="mb-2 text-2xl w-3/4  tracking-tight text-gray-900 dark:text-white">Mountain View, Above the cloud</h5>
                                <h6 className='dollar'>$ 150.99</h6>
                            </div>

                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">United Arab Emirates</p>
                            <img src={rating3} />
                        </div>
                    </div>

                </div>
            </div>
            <br /><br /><br />

        </>
    )
}


export default Destination