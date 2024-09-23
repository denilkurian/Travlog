import expedia from '../images/Group 2.jpg'
import airbnb from '../images/Group 9235.jpg'
import tripadvisor from '../images/Group(1).jpg'
import booking from '../images/Group(2).jpg'
import orbits from '../images/Group 3.jpg'


const Advertise = () => {

    const imgwidth = { width: '9rem', height: '2rem' }

    return (
        <> <br /><br /><br /> <br />
            <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>

                <div className='flex flex-col sm:flex-row sm:justify-center flex-wrap gap-14 sm:items-center'>

                    <img className='mx-auto' style={imgwidth} src={tripadvisor} />
                    <img className='mx-auto' style={imgwidth} src={expedia} />
                    <img className='mx-auto' style={imgwidth} src={booking} />
                    <img className='mx-auto' style={imgwidth} src={airbnb} />
                    <img className='mx-auto' style={imgwidth} src={orbits} />

                </div>

            </div>
            <br /><br /><br /><br />

        </>
    )


}

export default Advertise 