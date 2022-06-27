import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Places from '../../Places';

// The HTTP 403 Forbidden response status code indicates that the server understands the request but refuses to authorize 


const AddFavorite = (props) => {

    console.log("Made it to the Add Favorite Component")
    console.log(props.placeId)
    const fakeUserId = "62b5153a18a020243c4bb4a0";


    const [data, setData] = useState([]);

    // useEffect(()=> {
    //     const addFav = async () => {
    //         if (props.placeId) {
    //             const response = await axios.put(`http://localhost:8800/user/favorite/add/${props.placeId}`)
    //             console.log(response)
    //             setData(response.data)
    //         } 
    //    }
    //     addFav();
    // }, [props.placeId])

 {
    // useEffect(() => {
      const addFav = async () => {
          const response = await axios.put(
            `http://localhost:8800/user/favorite/put/${fakeUserId}/${props.placeId}`
          );
          console.log(response);
          setData(response.data);     
    }

    return (
      <div>
        <button
          onClick={() => {
            addFav()
          }}
        >
          FAVORITE!
        </button>
        <p className="actionMsg">{data.message}</p>
      </div>
    );
}
}
export default AddFavorite;