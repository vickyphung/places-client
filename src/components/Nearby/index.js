import NavBar from '../NavBar';
import Container from 'react-bootstrap/Container';
import FindPlace from './FindPlace';
import PlaceDetails from './PlaceDetails';
import TextSearch from './TextSearch';
import PlacePhoto from './PlacePhoto';


const Nearby = (props) => {


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








// Photo 
// https://maps.googleapis.com/maps/api/place/photo
//   ?maxwidth=400
//   &photo_reference={}
//   &key={}


// Place Nearby with Lat/Lon, Radius, Type, and Keyword
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=YOUR_API_KEY