import NavBar from "../NavBar";

import TextSearch from "./TextSearch";
import "./style.css";
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
      <div className="googlePlaceSearch">
       <div className="googleSearchInfo">
        <p>
          Use Google Maps Places API to search for Places</p>
      <p> User can add a Place to the database from search results.
       
     </p>
        <p>Search by Name, Location, Type, and/or Keyword.</p>
        <p>See Name, Address, Hours, Phone, Rating, and Google Reviews.</p>
        </div>
        <TextSearch />
      </div>
    </div>
  );
};

export default Nearby;
