import React, { useState } from 'react';
import axios from 'axios';
import PlaceDetails from '../PlaceDetails';

const TextSearch = (props) => {

    const [results, setResults] = useState([]);
    const [formData, setFormData] = useState('22312')

    const handleChange = (event) => {
        setFormData(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`http://localhost:8800/search/textSearch/${formData}`)
        console.log(response);
        setResults(response.data.results);
    }

  return (
    <div>
      <h1>Text Search</h1>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchInput"
          name="query"
          id="query"
          placeholder="arts and culture in alexandria, va"
          onChange={handleChange}
        />
        <input className="submitBtn" type="submit" value="🔍" />
      </form>
      <hr></hr>
      {console.log(results)}

      <div>
        {results?.map((result, index) => {
          return (
            <div className="searchResults" key={index}>
              <h2>{result.name}</h2>
              <h3>Location</h3>
              <p>{result.formatted_address}</p>
              <PlaceDetails detailsId={result.place_id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TextSearch;