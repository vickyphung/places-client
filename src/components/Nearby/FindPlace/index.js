import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../NavBar';


const FindPlace = (props) => {

const [data, setData] = useState([]);
// const [input, setInput ] = useState("");
// const [formData, setFormData] = useState('22312')

// const handleChange = (event) => {
//   setFormData(event.target.value)
// }

// //zipcode data is sent to SearchCoordinate where the actual search is executed
// const handleSubmit = (event) => {
//   event.preventDefault()
//   setZipcode(formData)
// }
    
const input = "GreenSpringGardens"

useEffect(() => {
    const getNearbyData = async () => {
      const response = await axios.get(`http://localhost:8800/search/findplace/${input}`       
      );
      console.log(response);
      setData(response.data);
  }
    getNearbyData();
  }, [])

  return (
    <div>
        <NavBar />
        <h1>Find Place By Text</h1>

    </div>
  )
}

export default FindPlace;