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
    setPlaces(response.data.results);
    console.log(places)
  };



  return (
    <div className="flex">
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

{/* 
      <div>
        {places?.map((results, index) => {
          return (
            <div className="searchResults" key={index}>
              <h2>{results.name}</h2>
            </div>
          );
        })}
      </div> */}




<Tag />
<Name />

    </div>
  );
}

export default Filter;
