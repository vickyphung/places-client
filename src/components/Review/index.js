import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';

const Review = (props) => {

  const [reviews, setReviews] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get('http://localhost:8800/review'
        
      //   , {
      //     headers: {
      //       "JWT-Token": localStorage.jwtToken
      //     }
      //   }
        
        );
        console.log(response);
        setReviews(response.data.reviews);
      }
      fetchData();
    }, [])
  

  return (
    <div>
      {console.log(reviews)}
      <div><NavBar /></div>
      <div><h1>Reviews</h1></div>


      {reviews?.map((review, index) => {
        return (
          <div className="reviews" key={index}>     

            <div className="review"> 
                <h3>Place Name</h3>
                    <p>{review.place.name}</p>
                <h3>Review</h3>
                    <p>{review.review}</p>
                <h3>Posted by</h3>
                    <p>{review.user.name}</p>
                <h3>Date Posted</h3>
                    <p>{review.createdAt}</p>
            </div>
          
          </div>
        )
      })}
    </div>
  )
}

export default Review;