import Bikedata from '../componenet/Bikedata';
import Filter from '../componenet/Filter';
import './SiteContainer.css';
import Header from './Header';


const SiteContainer = () =>{

    return(<div className="siteProperty">
        {/* <Header/> */}
        {/* <Filter /> */}
        <Bikedata />
    </div>)
} 

export default SiteContainer;