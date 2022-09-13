import React, { useState } from 'react';
import axios from 'axios';
import PlaceDetails from '../PlaceDetails';
import { Container } from "@chakra-ui/react";
import './styles.css'

const TextSearch = (props) => {

    const [results, setResults] = useState([]);
    const [formData, setFormData] = useState('22312')

    const handleChange = (event) => {
        setFormData(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://placeswithbear.herokuapp.com/search/textSearch/${formData}`)
        console.log(response);
        setResults(response.data.results);
    }

  return (
    <div className='googleTextSearch'>
      {/* <h1>Text Search</h1> */}
      
      <form className="searchForm" onSubmit={handleSubmit}>
        <div>
          <input
            className="searchInput"
            name="query"
            id="query"
            placeholder="  arts and culture in alexandria, va"
            onChange={handleChange}
          />
        </div>
        <div>
        <input className="submit" type="submit" value="🔍Search" />
        </div>
      </form>
      <hr></hr>
      {console.log(results)}

      <div>
        {results?.map((result, index) => {
          return (
            <Container>
              <div className="searchResults" key={index}>
                <h2>
                  <span className="placeTitle">{result.name}</span>
                </h2>
                <p>
                  <span className='placeAddress'>{result.formatted_address}</span>
                </p>
                <div className='placeDetail'>
                  <PlaceDetails detailsId={result.place_id} />
                </div>
              </div>
            </Container>
          );
        })}
      </div>
    </div>
  );
}

export default TextSearch;