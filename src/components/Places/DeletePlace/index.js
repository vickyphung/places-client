import React, { useEffect } from 'react';
import axios from 'axios';

const DeletePlace = (props) => {

    console.log("Made it to the Delete Place Component")
    console.log(props.placeId)

    useEffect(()=>{
        const delPlace = async () => {
            if (props.placeId) {
                const response = await axios.delete(`http://localhost:8800/places/delete/${props.placeId}`)
                console.log(response)
            } 
       }
        delPlace();
    }, [props.placeId])

    return (
        <div>
        <h1>Deleted</h1>
        <p>Successfully deleted the place, removed it from users favorites, and deleted all reviews pertaining to place.</p>
        </div>
    )
}

export default DeletePlace;



