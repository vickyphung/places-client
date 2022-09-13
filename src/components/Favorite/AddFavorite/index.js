import React, { useState } from "react";
import axios from "axios";


const AddFavorite = (props) => {
  console.log("Made it to the Add Favorite Component");
  console.log(props.placeId);
  const [data, setData] = useState([]);

  const fakeUserId = "62bbf966c4c434b12444023d";

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
        `https://placeswithbear.herokuapp.com/user/favorite/put/${fakeUserId}/${props.placeId}`
      );
      console.log(response);
      setData(response.data);
    };

    return (
        <button
          onClick={() => {
            addFav();
          }}
        >
          + like
        </button>
        // {/* <p className="actionMsg">{data.message}</p> */}
        // {console.log(data.message)}
    );
  }
};
export default AddFavorite;
