import React, { useState } from 'react';
import vector from '../images/Vector.jpg';
import facebook from '../images/Group(3).jpg';
import instagram from '../images/Group 8.jpg';
import twitter from '../images/Group(4).jpg';
import arrow from '../images/arrow-circle-down.9 1.png';


const Footer = () => {
    // State to manage the visibility of sections in mobile view
    const [showCompany, setShowCompany] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showMeetUs, setShowMeetUs] = useState(false);

    return (
        <>
            <div className="flex flex-row flex-wrap mx-auto max-w-6xl gap-10">
                <div className="ml-4 flex flex-col gap-3 lg:w-2/5">
                    <div className='flex flex-row gap-3'>
                        <img className="vector-img" src={vector} alt="Logo" />
                        <p className='text-xl font-bold'>Travlog</p>
                    </div>
                    <p className='text-paragraph text-lg py-4 '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>

                    <div className='flex flex-row gap-7'>
                        <img data-aos="zoom-in" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="300" src={facebook} alt="Facebook" />
                        <img data-aos="zoom-in" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="400" src={instagram} alt="Instagram" />
                        <img data-aos="zoom-in" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="600" src={twitter} alt="Twitter" />
                    </div>
                </div>

                {/* Footer company, contact , meet us section */}

                <div className="ml-4 flex flex-row flex-wrap gap-16 lg:pl-9">
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-row gap-16'>
                            <p className='text-xl'>Company</p>
                            <img
                                className='md:hidden sm:flex w-8 cursor-pointer'
                                src={arrow}
                                alt="Toggle Company"
                                onClick={() => setShowCompany(!showCompany)}
                            />
                        </div>
                        <div className={`${showCompany ? 'block' : 'hidden'} md:flex flex-col gap-5`}>
                            <p className='text-paragraph'>About</p>
                            <p className='text-paragraph'>Career</p>
                            <p className='text-paragraph'>Mobile</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 md:ml-9'>
                        <div className='flex flex-row gap-16'>
                            <p className='text-xl'>Contact</p>
                            <img
                                className='md:hidden sm:flex w-8 cursor-pointer'
                                src={arrow}
                                alt="Toggle Contact"
                                onClick={() => setShowContact(!showContact)}
                            />
                        </div>
                        <div className={`${showContact ? 'block' : 'hidden'} md:flex flex-col gap-5`}>
                            <p className='text-paragraph'>Why Travlog?</p>
                            <p className='text-paragraph'>Partner with us</p>
                            <p className='text-paragraph'>FAQ's</p>
                            <p className='text-paragraph'>Blog</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 md:ml-14'>
                        <div className='flex flex-row gap-16'>
                            <p className='text-xl'>Meet Us</p>
                            <img
                                className='md:hidden sm:flex w-8 cursor-pointer'
                                src={arrow}
                                alt="Toggle Meet Us"
                                onClick={() => setShowMeetUs(!showMeetUs)}
                            />
                        </div>
                        <div className={`${showMeetUs ? 'block' : 'hidden'} md:flex flex-col gap-5`}>
                            <p className='text-paragraph'>+00 92 1234 56789</p>
                            <p className='text-paragraph'>info@travlog.com</p>
                            <p className='text-paragraph'>205. R Street, New York</p>
                            <p className='text-paragraph'>BD23200</p>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
    );
}

export default Footer;
