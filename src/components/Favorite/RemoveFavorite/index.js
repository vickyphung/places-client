import React, { useEffect } from 'react';
import axios from 'axios';

const RemoveFavorite = (props) => {

    console.log("Made it to the Delete Favorite Component")
    console.log(props.placeId)

    const userId="628b273367ddc3872a9271d0"

    useEffect(()=>{
        const addFav = async () => {
            if (props.placeId) {
                const response = await axios.put(`http://localhost:8800/user/favorite/remove/${userId}/${props.placeId}`)
                console.log(response)
            } 
       }
        addFav();
    }, [props.placeId])

    return (
        <div>
            <h1>Delete Favorite Place</h1>
            <p>Successfully deleted favorite.</p>
        </div>
    )
}

export default RemoveFavorite;