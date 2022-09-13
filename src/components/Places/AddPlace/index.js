import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../NavBar";

const AddPlace = (props) => {
  const fakeUserId = "62bbf966c4c434b12444023d";

  const [placeFormData, setPlaceFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    tags: [""],
    user: `${fakeUserId}`,
  });

  // const [tagFormData, setTagFormData] = useState("");

  const handleChange = (event) => {
    setPlaceFormData({
      ...placeFormData,
      [event.target.name]: event.target.value,
    });
  };

  // const input = document.querySelector("input[name=placeTags]");
  // new Tagify(input);

  // const handleTagChange = (e) => {
  //   setTagFormData({
  //     tagFormData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8800/places/add", {
      name: placeFormData.placeName,
      location: {
        street: placeFormData.placeStreet,
        city: placeFormData.placeCity,
        state: placeFormData.placeState,
        zip: placeFormData.placeZip,
      },
      tags: [placeFormData.placeTags],
      user: `${fakeUserId}`,
    });
    console.log(response);
    // localStorage.setItem("jwtToken", response.data.jwtToken);
  };

  return (
    <div className="addPlace">
      <NavBar />
      <h1 className="addPlaceTitle">Add a Place</h1>

      <form onSubmit={handleSubmit}>
      <div className="addPlaceForm">

        <div>
          <label htmlFor="placeName">Name:</label>
          <input name="placeName" id="placeName" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="placeStreet">Street:</label>
          <input name="placeStreet" id="placeStreet" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="placeCity">City:</label>
          <input name="placeCity" id="placeCity" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="placeState">State:</label>
          <input name="placeState" id="placeState" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="placeZip">Zip:</label>
          <input name="placeZip" id="placeZip" onChange={handleChange} />
        </div>
        <div>
        <label htmlFor="placeTags">
          Tags:
        </label>
        <input
          className="input"
          name="placeTags"
          id="placeTags"
          onChange={handleChange}
        />

</div>




        <div>
          <input className="submitButton" type="submit" />
        </div>
      </div>

      </form>
    </div>
  );
};

export default AddPlace;

