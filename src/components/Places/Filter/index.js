import React, { useState } from "react";
import axios from "axios";
import NavBar from "../../NavBar";
import Tag from "./Tag";
import Name from "./Name";

function Filter() {
  const [places, setPlaces] = useState([]);
  const [formData, setFormData] = useState("");

  const handleChange = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `${
        "https://placeswithbear.herokuapp.com" || "localhost:8800"
      }/places/state/${formData}`
    );
    console.log(response);
    setPlaces(response.data.places);
    console.log(response.data);
    // console.log(response.data.results);

  };

  return (
    <div className="flex">
      {console.log(places)}

      <NavBar />

      <div>
        <h1>Filter Posts by State</h1>
      </div>

      <div>
        <form className="searchForm" onSubmit={handleSubmit}>
          <div>
            <input
              className="searchInput"
              name="query"
              id="query"
              placeholder="DC, MD, or VA"
              onChange={handleChange}
            />
          </div>
          <div>
            <input className="submit" type="submit" value="🔍Search" />
          </div>
        </form>
      </div>

      <div>
        {places?.map((place, index) => {
          return (
            <div className="searchResults" key={index}>
              <h2>{place?.name}</h2>
            </div>
          );
        })}
      </div>

      <Tag />
      {/* <Name /> */}
    </div>
  );
}

export default Filter;
