import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import AddReview from "../Review/AddReview";
import AddFavorite from "../Favorite/AddFavorite";
import {
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Container from "react-bootstrap/esm/Container";

const Places = (props) => {
  console.log("PINKY!");
  console.log(props.userId);

  const fakeUserId = "62b5153a18a020243c4bb4a0";

  const [open, setOpen] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8800/places");

      // , {
      //   headers: {
      //     "JWT-Token": localStorage.jwtToken
      //   }
      // }
      // );

      console.log(response);
      setPlaces(response.data.placesList);
    };
    fetchData();
  }, [props.setFavoriteId]);

  // const delPost = (data) => {
  //   props.setDeleteId(data)
  //   };

  return (
    <Container>
      <div className="placeList">
        {console.log(places)}
        {places?.map((placeList, index) => {
          return (
            <div className="place" key={index}>
              <div className="placeName">
                <h2>{placeList.name}</h2>
              </div>

              <div className="address">
                <p>{placeList.location.street}</p>
                <p>{placeList.location.city}</p>
                <p>{placeList.location.state}</p>
                <p>{placeList.location.zip}</p>
              </div>

              <div className="tags">
                {placeList?.tags?.map((tag, index) => {
                  return (
                    <div key={index} className="tag">
                      <p className="reviewText"> {tag}</p>
                    </div>
                  );
                })}
              </div>

              <div className="favCount">
                <p>
                  <span className="favCounter">♡ {placeList.favorites}</span>
                </p>
              </div>

              <div>
                <h3 className="tagsLabel">Reviews:</h3>
                {placeList?.reviews?.map((review, index) => {
                  return (
                    <div key={index} id="reviews-list">
                      <p className="reviewText">{review.review}</p>
                      <h3 className="tagsLabel">Posted by:</h3>{" "}
                      <p className="reviewText">{review.user}</p>
                    </div>
                  );
                })}
              </div>

              {/* <div>
              <h3>Posted by</h3>
              <p>{placeList.user ? placeList.user : "Unknown"}</p>
            </div> */}

              <div className="addReviewFavoriteBtns">
                <AddReview placeId={placeList._id} userId={props.userId} />
                <AddFavorite placeId={placeList._id} userId={props.userId} />

                {/* <Button onClick={() => props.setDeleteId(placeList._id)}>Delete</Button>           */}

                {/* <Button onClick={() => props.setUpdateId(placeList._id)}>Edit</Button>   */}
              </div>
            </div>
          );
        })}
        <Divider orientation="horizontal" />
      </div>
    </Container>
  );
};

export default Places;

// function show editAndDeletePostBtn
// if
// place.user = current logged in user id
// setShow = true
// else
// setShow = false

// function show ReviewFavoriteBtn
// if
// there is a user logged in
// setShow = true
// else
// setShow = false

// {
//   /* <h3>Functions ONLY IF User Posted this Place</h3>
// <Button onClick={() => props.setDeleteId(placeList._id)}>Delete</Button>
// <Button onClick={() => props.setUpdateId(placeList._id)}>Edit</Button>    */
// }
// {
//   /* <h3>Functions for ANY LOGGED IN USER</h3> */
// }
// {
//   /* <Button
//   onClick={() => {
//     props.setReviewId(placeList._id);
//     props.setUser(props.userId);
//   }}
// >
//   Leave a Review
// </Button> */
// }
