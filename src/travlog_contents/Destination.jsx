
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
            <div className="destination-container mx-auto px-4 sm:px-6 lg:px-92 max-w-7xl">

                <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-6">
                    <div className="w-full text-center lg:text-left">
                        <h1 className="services-header mb-3">TOP DESTINATION</h1>
                        <h1 className="services-paragraph">Explore top destination</h1>
                    </div>

                    <div className="flex items-center justify-center lg:justify-end gap-10">
                        <img className="left-right-arrow" src={left} alt="Left Arrow" />
                        <img className="left-right-arrow" src={right} alt="Right Arrow" />
                    </div>
                </div>



                <br /><br />


                <div className="flex flex-wrap md:gap-9 lg:gap-12">

                    <div className="w-full sm:w-1/2 sm:mr-7 md:w-1/4 lg:w-3/12 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6"> {/* Add mb-6 for space in mobile */}
                        <a href="#">
                            <img className="w-full lg:w-4/4" src={beach} alt="" />
                        </a>
                        <div className="p-6">
                            <div className='flex flex-col-reverse lg:flex-row gap-5'>
                                <h6 className="mb-2 text-2xl w-3/4 tracking-tight text-gray-900 dark:text-white">Paradise Beach, Bantayan Island</h6>
                                <h5 className="dollar">$ 550.19</h5>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rome, Italy</p>
                            <img src={rating1} />
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 sm:mr-7 md:w-1/4 lg:w-3/12 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6"> {/* Add mb-6 for space in mobile */}
                        <a href="#">
                            <img className="w-full" src={ocean} alt="" />
                        </a>
                        <div className="p-5">
                            <div className='flex flex-col-reverse lg:flex-row gap-6'>
                                <h5 className="mb-2 text-2xl w-3/4 tracking-tight text-gray-900 dark:text-white">Ocean with full of Colors</h5>
                                <h6 className="dollar">$ 20.99</h6>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Maldives</p>
                            <img src={rating2} />
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 sm:mr-7 md:w-1/4 lg:w-3/12 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 mb-6"> {/* Add mb-6 for space in mobile */}
                        <a href="#">
                            <img className="w-full" src={mountain} alt="" />
                        </a>
                        <div className="p-5">
                            <div className='flex flex-col-reverse lg:flex-row gap-6'>
                                <h5 className="mb-2 text-2xl w-3/4 tracking-tight text-gray-900 dark:text-white">Mountain View, Above the cloud</h5>
                                <h6 className="dollar">$ 150.99</h6>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">United Arab Emirates</p>
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