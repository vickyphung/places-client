import NavBar from '../NavBar';
import Container from 'react-bootstrap/Container';
import TextSearch from './TextSearch';

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
        <Container>
            <NavBar />
            <TextSearch />         
        </Container>
    </div>
  )
}

export default Nearby;
