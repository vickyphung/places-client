import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

const AddFromMaps = (props) => {

const [userId, setUserId] = useState([]);

useEffect(() => {
  const fetchId = async () => {
    const response = await axios.get(
      `https://placeswithbear.herokuapp.com/user/id`,
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


let fakeUserId = "62bbf966c4c434b12444023d";

  const [placeFormData, setPlaceFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    tags: [""],
    user: `${userId}`
  });

  const handleChange = (event) => {
    setPlaceFormData({
      ...placeFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("https://placeswithbear.herokuapp.com/places/add", {
      name: placeFormData.name,
      // name:  `${props.placeName.name}`,
      location: {
        street: `${props.postFormData[0].short_name} ${props.postFormData[1].short_name}`,
        city: `${props.postFormData[3].short_name}`,
        state: `${props.postFormData[4].short_name}`,
        // zip: `${props.postFormData[6].short_name}`,
      },
      tags: [placeFormData.placeTags],
      user: `${fakeUserId}`
    });
    console.log(response);
    // localStorage.setItem("jwtToken", response.data.jwtToken);
  };

  return (
    <div className="addFromMaps">
      <form className="addFromMapsForm" onSubmit={handleSubmit}>
        <label className="nameLabel" htmlFor="placeName">
          Name:
        </label>
        <input
          className="nameInput"
          name="name"
          id="name"
          onChange={handleChange}
        />

        <label className="nameLabel" htmlFor="placeTags">
          Tags:
        </label>
        <input
          className="nameInput"
          name="placeTags"
          id="placeTags"
          onChange={handleChange}
        />
        <Button className="subBtn" type="submit">+add</Button>
      </form>
    </div>
  );
};

export default AddFromMaps;
