import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Recommendations from '../Homepage/Recommendations/Recommendations';
import './Fullsite.css'

const Fullsite = () => {

    return (
        <div className='fullsite'>
            <Header/>
            <Banner/>
            <Recommendations/>
        </div>
    )
}

export default Fullsite;