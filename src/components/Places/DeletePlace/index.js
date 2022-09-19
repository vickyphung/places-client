import { useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import NavBar from '../../NavBar';
import axios from 'axios';

const DeletePlace = (props) => {

    console.log("Made it to the Delete Place Component")
    console.log(props.placeId)

    // const navigate = useNavigate();

    useEffect(()=>{
      const delPlace = async () => {
        if (props.placeId) {
          const response = await axios.delete(
            (`https://placeswithbear.herokuapp.com/places/delete/${props.placeId}` || "http://localhost:8800/places")
          );
          console.log(response);
        }
      };
      delPlace();
      // eslint-disable-next-line
      // useNavigate('../places');
    }, [props.placeId])

    return (
        <div>
          <NavBar />
        <h1>Deleted Place</h1>
        </div>
    )

  }

export default DeletePlace;



