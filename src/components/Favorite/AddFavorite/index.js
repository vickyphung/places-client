import React, { useState } from "react";
import axios from "axios";


const AddFavorite = (props) => {
  console.log("Made it to the Add Favorite Component");
  console.log("placeID " + props.placeId);
  const [data, setData] = useState([]);

  const fakeUserId = "633f3b441673cfa3030031eb";

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
      <div>
        <button
        title="add a like"
          onClick={() => {
            addFav();
          }}
        >
          ❤️ 
        </button>
 
         {console.log(data.message)}
        </div>
    );
  }
};
export default AddFavorite;
