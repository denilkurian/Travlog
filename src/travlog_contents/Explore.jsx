import '../css/explore.css';
import work from '../images/work 1.jpg';
import layer from '../images/layer.jpg';
import rectangle1 from '../images/Rectangle 1.jpg';
import rectangle2 from '../images/Rectangle 2.jpg';
import rectangle3 from '../images/Rectangle 3.jpg';
import circle from '../images/play-circle.5 1.jpg';
import frame16 from '../images/Frame 16.jpg'
import frame18 from '../images/Frame 18.jpg'


function Explore() {

    const rose = { color: 'rgb(216 105 201)' }

    return (

        <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                <div className="flex flex-col-reverse lg:flex-row  flex-wrap">

                    <div className="lg:w-5/12 landing-medium flex flex-col items-center md:items-center lg:items-start py-20">

                        <div className="flex flex-row items-center" style={rose}>
                            <p className="ml-10"><b>Explore the world!</b> &nbsp;</p>
                            <img style={{ width: '1.6rem' }} src={work} alt="work icon" />
                        </div>

                        <b>
                            <h1 data-aos="fade-up" data-aos-easing="ease-in-out-quad" data-aos-duration="800" data-aos-delay="300" className="travel-text text-1xl font-bold py-7">
                                Travel <span style={rose}>top destination</span> of the world
                            </h1>
                        </b>

                        <br />  <br />
                        <h5 data-aos="fade-in" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="300" className='text-paragraph text-lg py-7'>We always make our customer happy by providing as many choices as possible.</h5>

                        <br /><br />

                        <div className='flex flex-row items-center gap-5 landing-button-medium md:justify-center lg:justify-start'>
                            <button className="started-button">Get Started</button><br /><br />
                            <button className="watch-button flex items-center space-x-2">
                                <img style={{ width: '23px' }} src={circle} alt="circle" />
                                <span>Watch Demo</span>
                            </button>
                        </div>
                    </div>

                 

                    <div className="flex flex-col items-center ">

                        <img style={{ width: '40rem' }} className="w-80" src={layer} />

                        <div className='flex flex-wrap mt-0'>
                            <div className='w-6/12 pr-6 '>
                                <div className='img-frame16'>
                                    <img data-aos="fade-down" data-aos-easing="ease-in-out-quad" data-aos-duration="700" data-aos-delay="300" className="w-60 img-translate" src={rectangle1} />
                                    <img className="w-16 frame16" src={frame16} />
                                </div>

                                <img data-aos="fade-up" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="300" className="w-60 img-translate" src={rectangle2} />
                            </div>
                            <div className='w-6/12'>
                                <br /> <br />
                                <div className='img-frame18'>
                                    <img data-aos="fade-left" data-aos-easing="ease-in-out-quad" data-aos-duration="500" data-aos-delay="300" className="w-60 img-translate" src={rectangle3} />
                                    <img className="w-20 frame18" src={frame18} />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <br /> <br />


        </>

    )



}

export default Explore
