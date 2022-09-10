import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdatePlace = (props) => {

    const [place, setPlace] = useState([]);

    useEffect(() => {
      const updatePlace = async () => {
        const response = await axios.get(`http://localhost:8800/places/id/${props.placeId}`
        
        //  , {
        //    headers: {
        //      "JWT-Token": localStorage.jwtToken
        //    }
        //  }
        
        );
        console.log(response);
        setPlace(response.data);

      }
      updatePlace();
    }, [props.placeId])


    const [placeFormData, setPlaceFormData] = useState({
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        tags: [""]

      });

    const handleChange = (event) => {
        setPlaceFormData({ ...placeFormData, [event.target.name]: event.target.value });
      }

    const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.put(`http://localhost:8800/places/update/${props.placeId}`, {
        name: placeFormData.placeName,
        location: {
             street: placeFormData.placeStreet,
             city: placeFormData.placeCity,
             state: placeFormData.placeState,
             zip: placeFormData.placeZip,
        },
        tags: [placeFormData.placeTags]
    });
    console.log(response);
    // localStorage.setItem("jwtToken", response.data.jwtToken);
    }


    return(
        <div>
        {console.log(place)}
                
            {place?.map((place, index) => {    
                return (
                    <div>        
       
                        <h1>Update {place.name}</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="placeName">Name:</label>
                            <input name="placeName" placeholder={place.name} id="placeName" onChange={handleChange} />
                            <label htmlFor="placeStreet">Street:</label>
                            <input name="placeStreet" id="placeStreet" placeholder={place.location.street} onChange={handleChange} />
                            <label htmlFor="placeCity">City:</label>
                            <input name="placeCity" id="placeCity" placeholder={place.location.city} onChange={handleChange} />
                            <label htmlFor="placeState">State:</label>
                            <input name="placeState" id="placeState" placeholder={place.location.state} onChange={handleChange} />
                            <label htmlFor="placeZip">Zip:</label>
                            <input name="placeZip" id="placeZip" placeholder={place.location.zip} onChange={handleChange} />
                            <label htmlFor="placeTags">Tags:</label>
                            <input name="placeTags" id="placeTags" placeholder={place.tags} onChange={handleChange} />
                            <input type="submit" />
                        </form>
                    </div>
                )
            })}
        </div>
    )
}

export default UpdatePlace;