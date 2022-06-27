import React, { useState, useEffect } from "react";
import axios from "axios";

const AddFromMaps = (props) => {


 const [userId, setUserId] = useState([]);

 useEffect(() => {
   const fetchId = async () => {
     const response = await axios.get(
       `http://localhost:8800/user/id`,

       {
         headers: {
           "JWT-Token": localStorage.jwtToken,
         },
       }
     );
     console.log(response);
     setUserId(response.data.user[0]._id);
     console.log(response.data.user[0]._id);

   };
   fetchId();
 }, []);






    // const userId = "62b5153a18a020243c4bb4a0";

  const [placeFormData, setPlaceFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    tags: [""],
    //user: `${userId}`
  });

  const handleChange = (event) => {
    setPlaceFormData({
      ...placeFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:8800/places/add", {
      name: placeFormData.name,
      location: {
        street: `${props.postFormData[0].short_name} ${props.postFormData[1].short_name}`,
        city: `${props.postFormData[3].short_name}`,
        state: `${props.postFormData[4].short_name}`,
        zip: `${props.postFormData[6].short_name}`,
      },
      tags: [placeFormData.placeTags],
      user: `${userId}`
    });
    console.log(response);
    // localStorage.setItem("jwtToken", response.data.jwtToken);
  };

  return (
    <div>
      <h1>Add from Maps</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="placeName">Name:</label>
        <input name="name" id="name" onChange={handleChange} />

        <label htmlFor="placeTags">Tags:</label>
        <input name="placeTags" id="placeTags" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddFromMaps;
