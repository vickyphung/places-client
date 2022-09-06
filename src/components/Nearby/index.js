import NavBar from '../NavBar';

import TextSearch from './TextSearch';
import './style.css'
const Nearby = (props) => {

  // const [lat, setLat] = useState([]);
  // const setLatAndLink = (lat) => {
  //     setLat(lat)
  // }
  
  // const [lon, setLon] = useState([]);
  // const setLonAndLink = (lon) => {
  //     setLon(lon)
  // }

  return (
    <div>
            <NavBar />
            Google Places API Search to search and add Places to the database
            <TextSearch /> 


            Places Database Search
            <form>Tag Search
              <input></input>
            </form>       
            <form>City Search
              <input></input>
            </form>   
            <form>Zipcode Search
              <input></input>
            </form>   

    </div>
  )
}

export default Nearby;
