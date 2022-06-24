import React, { useEffect, useState } from 'react';
import axios from 'axios';

// The HTTP 403 Forbidden response status code indicates that the server understands the request but refuses to authorize 


const AddFavorite = (props) => {

    console.log("Made it to the Add Favorite Component")
    console.log(props.placeId)

    //using this for testing purposes
    // const userId="628b273367ddc3872a9271d0"

    const [data, setData] = useState([]);

    useEffect(()=>{
        const addFav = async () => {
            if (props.placeId) {
                const response = await axios.put(`http://localhost:8800/user/favorite/add/${props.placeId}`

                , {
                    headers: {
                      "JWT-Token": localStorage.jwtToken
                    }
                  }
                
                )
                console.log(response)
                setData(response.data)

            } 
       }
        addFav();
    }, [props.placeId])

    return (
        <div>
            <h1>Add Favorite Place</h1>
            <p className='actionMsg'>{data.message}</p>

        </div>
    )
}

export default AddFavorite;