import React, { useState } from 'react';
import axios from 'axios';

const AddPlace = () => {

    const [placeFormData, setPlaceFormData] = useState({
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        tags: [""]
        //user: `${userId}`

      });

    const handleChange = (event) => {
        setPlaceFormData({ ...placeFormData, [event.target.name]: event.target.value });
      }

    const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:8800/places/add', {
        name: placeFormData.placeName,
        location: {
             street: placeFormData.placeStreet,
             city: placeFormData.placeCity,
             state: placeFormData.placeState,
             zip: placeFormData.placeZip,
        },
        tags: [placeFormData.placeTags]
        //user: `${userId}`
    });
    console.log(response);
    // localStorage.setItem("jwtToken", response.data.jwtToken);
    }


    return(
        <div>
            <h1>Add a Place</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="placeName">Name:</label>
                <input name="placeName" id="placeName" onChange={handleChange} />
                <label htmlFor="placeStreet">Street:</label>
                <input name="placeStreet" id="placeStreet" onChange={handleChange} />
                <label htmlFor="placeCity">City:</label>
                <input name="placeCity" id="placeCity" onChange={handleChange} />
                <label htmlFor="placeState">State:</label>
                <input name="placeState" id="placeState" onChange={handleChange} />
                <label htmlFor="placeZip">Zip:</label>
                <input name="placeZip" id="placeZip" onChange={handleChange} />
                <label htmlFor="placeTags">Tags:</label>
                <input name="placeTags" id="placeTags" onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddPlace;