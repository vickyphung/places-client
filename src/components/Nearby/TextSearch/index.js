import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../NavBar';
import Container from 'react-bootstrap/Container';

const TextSearch = (props) => {

    // const userId= "628b273367ddc3872a9271d0"
    const query = "arts%20and%20culture%20in%20alexandria,%20va"

  const [data, setData] = useState([]);
    
  useEffect(() => {
      const getNearbyData = async () => {
        const response = await axios.get(`http://localhost:8800/search/textSearch/${query}`       
        );
        console.log(response);
        setData(response.data);
    };
    getNearbyData();
    }, [])

  return (
    <div>
        <Container>
            <NavBar />
            <h1>Text Search</h1>
        </Container>
    </div>
  )
}

export default TextSearch;