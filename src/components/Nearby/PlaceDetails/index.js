import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../NavBar';


const PlaceDetails = (props) => {

// console.log(props.mapsPlaceId)
const [data, setData] = useState([]);
const mapsPlaceId = "ChIJ05IyWgSzt4kRlsdUKEzRTRM"

useEffect(() => {
    const getPlaceDetails = async () => {
      const response = await axios.get(`http://localhost:8800/search/details/${mapsPlaceId}`       
      );
      console.log(response);
      setData(response.data);
  }
    getPlaceDetails();
  }, [])

  return (
    <div>
        <NavBar />
        <h1>Place Details</h1>

    </div>
  )
}

export default PlaceDetails;