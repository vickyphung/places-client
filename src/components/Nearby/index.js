import { useState } from 'react'
import NavBar from '../NavBar';
import Container from 'react-bootstrap/Container';
import FindPlace from './FindPlace';
import PlaceDetails from './PlaceDetails';
import TextSearch from './TextSearch';
import PlacePhoto from './PlacePhoto';


const Nearby = (props) => {


  const [lat, setLat] = useState([]);
  const setLatAndLink = (lat) => {
      setLat(lat)
  }
  
  const [lon, setLon] = useState([]);
  const setLonAndLink = (lon) => {
      setLon(lon)
  }




  return (
    <div>
        <Container>
          <NavBar />
          <TextSearch />
          <FindPlace />
          <PlaceDetails />
          <PlacePhoto />
        </Container>
    </div>
  )
}

export default Nearby;




// Place Nearby with Lat/Lon, Radius, Type, and Keyword
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY