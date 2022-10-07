import React, { useState } from "react";
import axios from "axios";


function Filter() {
  const [places, setPlaces] = useState([]);



  const dc = async () => {
    const response = await axios.get(
      `${
        "https://placeswithbear.herokuapp.com" || "localhost:8800"
      }/places/state/DC`
    );
    console.log(response);
    setPlaces(response.data.places);
    console.log(response.data);
    // console.log(response.data.results);
  };



  return (
    <div className="flex">
      {console.log(places)}



      <div>

    <button onClick={dc}>DC</button>





      </div>

      <div>
        {places?.map((place, index) => {
          return (
            <div className="searchResults" key={index}>
              <h2>{place?.name}</h2>
              {place?.location.street}
              {place?.location.city}
              {place?.location.state}
              <a href={`${'https://placeswithbear.herokuapp.com' || 'localhost:8800'}/places/id/${place?._id}`}>Link</a>



            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Filter;
