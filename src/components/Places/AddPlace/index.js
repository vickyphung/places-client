import React, { useState } from "react";
import axios from "axios";
import Tagify from "@yaireo/tagify";
import NavBar from "../../NavBar";

const AddPlace = (props) => {
  const fakeUserId = "62bbf966c4c434b12444023d";

  const [placeFormData, setPlaceFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    user: `${fakeUserId}`,
  });

  const [tagFormData, setTagFormData] = useState("");

  const handleChange = (event) => {
    setPlaceFormData({
      ...placeFormData,
      [event.target.name]: event.target.value,
    });
  };

  const input = document.querySelector("input[name=placeTags]");
  new Tagify(input);

  const handleTagChange = (e) => {
    setTagFormData({
      tagFormData,
      [e.target.name]: e.target.value,
    });
  };

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
      tags: [tagFormData.placeTags],
      user: `${fakeUserId}`,
    });
    console.log(response);
    // localStorage.setItem("jwtToken", response.data.jwtToken);
  };

  return (
    <div className="addPlace">
<<<<<<< HEAD
      <NavBar />
      <h1>Add a Place</h1>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="placeTags">Tags:</label>

          <input
            name="placeTags"
            id="placeTags"
            onChange={handleTagChange}
          ></input>
        </div>
        <div>
          <input className="submitButton" type="submit" />
        </div>
=======

      <h1>Add a Place</h1>
      <form onSubmit={handleSubmit}>
       
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
        <label htmlFor="placeTags">Tags:</label>

        <input
          name="placeTags"
          id="placeTags"
          onChange={handleTagChange}
        ></input>
        </div>
        <div>
        <input className="submitButton" type="submit" />
        </div>

>>>>>>> 88b2ea0b6953da6cc85dba33c2c67652231480e2
      </form>
    </div>
  );
};

export default AddPlace;

// var tagify = new Tagify(input);
// var formElm = document.forms[0]; // just an example

// function onTagifyKeyDown(input){
//   if(
//       !tagify.state.inputText &&  // assuming user is not in the middle oy adding a tag
//       !tagify.state.editing       // user not editing a tag
//     ){
//     setTimeout(() => input.submit())  // put some buffer to make sure tagify has done with whatever, to be on the safe-side
//   }
// }
// tagify.on("keydown", onTagifyKeyDown);

// const input = {
//   if (
//     !tagify.state.inputText && // assuming user is not in the middle oy adding a tag
//     !tagify.state.editing // user not editing a tag
//   ) {
//     setTimeout(() => document.querySelector("input[name=placeTags]")); // put some buffer to make sure tagify has done with whatever, to be on the safe-side
//   }
// }

//     const onChange = useCallback((e) => {
//   console.log("CHANGED:"
//     , e.detail.tagify.value // Array where each tag includes tagify's (needed) extra properties
//     , e.detail.tagify.getCleanValue()) // Same as above, without the extra properties
//     , e.detail.value // a string representing the tags
//   )
// }, [])

// if (
//   e.key == "Enter" &&
//   !tagify.state.inputText && // assuming user is not in the middle oy adding a tag
//   !tagify.state.editing // user not editing a tag
// ) {
//   setTagFormData({
//     tagFormData,
//     [e.target.name]: e.target.value,
//   });
// }
//   }
