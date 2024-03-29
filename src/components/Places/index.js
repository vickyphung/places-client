import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
import AddReview from "../Review/AddReview";
import AddFavorite from "../Favorite/AddFavorite";
import NavBar from "../NavBar";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
} from "@chakra-ui/react";
// import Filter from "./Filter";

const Places = (props) => {
  console.log("PINKY!");
  console.log(props.userId);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  // const fakeUserId = "62b5153a18a020243c4bb4a0";
  // const [open, setOpen] = useState(false);
  
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await axios.get("http://localhost:8800/places");
      const response = await axios.get(
        "https://placeswithbear.herokuapp.com/places" ||
          "http://localhost:8800/places"
      , {
        headers: {
          "JWT-Token": localStorage.jwtToken
        }
      }
      );
      console.log("JWT " + localStorage.jwtToken)
      console.log(response);
      setPlaces(response.data.placesList);
    };
    fetchData();
  }, [props.setFavoriteId]);

  const delPost = (data) => {
    props.setDeleteId(data);
  };

  return (
    <Container>
      {" "}
      <div className="p">
        {console.log(places)}

        <div className="top">
        <NavBar />
        </div>

        <div className="pTitle"><h1>Places</h1></div>

{/* <Filter /> */}



        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="placeList">
            {places?.map((placeList, index) => {
              return (
                <div className="pName" key={index}>
         
                    {/* <div className="placeName">
                      <h2>{placeList.name}</h2>
                    </div> */}


                    <Accordion allowToggle>
                      <AccordionItem>
                      <AccordionButton
                            className="pDrop"
                            _expanded={{ bg: "white", color: "#2d46b9" }}
                          >
                            <Box flex="1" textAlign="left">
                         <span className="placeName">{placeList.name}</span>
                            </Box>

                            <span className="accordIcon">
                              {" "}
                              <AccordionIcon />
                            </span>
                          </AccordionButton>

                          <AccordionPanel className="" pb={4}>




                    <div className="address">
                      <p>
                        {placeList.location.street}
                        <br />
                        {placeList.location.city}, {placeList.location.state}{" "}
                        {placeList.location.zip}
                      </p>
                    </div>
                    <a href={placeList.url}>{placeList.url}</a>
                

                  <div className="tagsFav">
                    <div className="tags">
                      {placeList?.tags?.map((tag, index) => {
                        return (
                          <li key={index} className="tag">
                            {tag}
                          </li>
                        );
                      })}
                    </div>

                    <div className="favCount">
                      <p>
                        <span className="favCounter">
                          <span className="heart">❤️ </span>
                          {placeList.favorites}
                        </span>
                      </p>
                    </div>


<div>
<a href={`${'https://placeswithbear.herokuapp.com' || 'localhost:8800'}/places/id/${placeList?._id}`}>Details</a>
</div>

</div><div>
                    <div className="reviewSection">
                    <Accordion allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            className="reviewDrop"
                            _expanded={{ bg: "#495db8", color: "white" }}
                          >
                            <Box flex="1" textAlign="left">
                              <p className="reviewLabel">Reviews</p>
                            </Box>

                            <span className="accordIcon">
                              {" "}
                              <AccordionIcon />
                            </span>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel className="reviewsBox" pb={4}>
                          {placeList?.reviews?.map((review, index) => {
                            return (
                              <div key={index} id="reviews-list">
                                <p className="reviewText">
                                  💬 {review.review}
                                </p>
                                <p className="postedBy">
                                  {" "}
                                  -{" "}
                                  <span className="italic">
                                    {review.user}
                                  </span>
                                </p>
                              </div>
                            );
                          })}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                    </div>
                  </div>

                  {/* <div>
              <h3>Posted by</h3>
              <p>{placeList.user ? placeList.user : "Unknown"}</p>
            </div> */}
                  <div className="buttonSection">
                    <AddReview placeId={placeList._id} userId={props.userId} />
                    <AddFavorite
                      placeId={placeList._id}
                      userId={props.userId}
                    />

                    {/* <Button onClick={() => props.setDeleteId(placeList._id)}>Delete</Button>           */}
                    {/* <button onClick={() => delPost(placeList._id)}>del3</button>  */}
                    {/* <Button onClick={() => props.setPlaceUpdateId(placeList._id)}>Edit</Button>   */}

                    <button
                      title="edit place"
                      className="editBtn"
                      onClick={() => {
                        props.setPlaceUpdateId(placeList._id);
                      }}
                    >
                      ✏️ edit
                    </button>

                    <button
                      className="editBtn"
                      title="delete place"
                      onClick={() => {
                        delPost(placeList._id);
                      }}
                    >
                      ❌ delete
                    </button>
                  </div>



                  </AccordionPanel>
                      </AccordionItem>
                    </Accordion>




                </div>

              );
            })}
          </div>
        )}
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
