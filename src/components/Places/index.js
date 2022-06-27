import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'
import NavBar from '../NavBar';
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import AddReview from '../Review/AddReview';
// import Card from 'react-bootstrap/Card'
import AddFavorite from '../Favorite/AddFavorite'

const Places = (props) => {

  console.log("PINKY!");
  console.log(props.userId);
  
  
  const fakeUserId = "62b5153a18a020243c4bb4a0";
  
  
  const [open, setOpen] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8800/places')
      
      // , {
      //   headers: {
      //     "JWT-Token": localStorage.jwtToken
      //   }
      // }
      // );

      console.log(response);
      setPlaces(response.data.placesList);
    }
    fetchData();
  }, [props.setFavoriteId])
  
    // const delPost = (data) => {
    //   props.setDeleteId(data)
    //   }; 

  return (
    <div>
      {console.log(places)}
      <div><NavBar /></div>
      <div><h1>Places</h1></div>
      <div></div>

      {places?.map((placeList, index) => {
        return (
          <div className="place" key={index}>
            <div>
              <h2>{placeList.name}</h2>
            </div>
            <div>
              <h3>Location</h3>
              <p>{placeList.location.street}</p>
              <p>{placeList.location.city}</p>
              <p>{placeList.location.state}</p>
              <p>{placeList.location.zip}</p>
            </div>
            <div className="tags">
              <h3>Tags</h3>
              {placeList?.tags?.map((tag, index) => {
                return (
                  <div key={index} className="tag">
                    {tag}
                  </div>
                );
              })}
            </div>
            <div>
              <h3>Favorites</h3>
              <p>{placeList.favorites}</p>
            </div>
            <div>
              <Button
                variant="info"
                onClick={() => setOpen(!open)}
                aria-controls="reviews-list"
                aria-expanded={open}
              >
                <h3>Reviews</h3>
              </Button>
              {placeList?.reviews?.map((review, index) => {
                return (
                  <Collapse in={open}>
                    <div key={index} id="reviews-list">
                      <h4>Review:</h4> <p>{review.review}</p>
                      <h4>Posted by:</h4> <p>{review.user}</p>
                    </div>
                  </Collapse>
                );
              })}
            </div>
            <div>
              <h3>Posted by</h3>
              <p>{placeList.user ? placeList.user : "Unknown"}</p>
            </div>
            <div>
              {/* <h3>Functions ONLY IF User Posted this Place</h3>
              <Button onClick={() => props.setDeleteId(placeList._id)}>Delete</Button>          
              <Button onClick={() => props.setUpdateId(placeList._id)}>Edit</Button>    */}
              <h3>Functions for ANY LOGGED IN USER</h3>
              <Button
                onClick={() => {
                  props.setReviewId(placeList._id);
                  props.setUser(props.userId);
                }}
              >
                Leave a Review
              </Button>

              <AddReview placeId={placeList._id} userId={props.userId} />

             

              <AddFavorite placeId={placeList._id} userId={props.userId} />
            </div>
          </div>
        );
      })}
    </div>
  )
}

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
