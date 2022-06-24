import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateReview = (props) => {

    // eslint-disable-next-line
    const userId="628b273367ddc3872a9271d0"

    console.log("Made it to Update Review Component")
    console.log(props.reviewId)

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`http://localhost:8800/review/id/${props.reviewId}`
        
        //  , {
        //    headers: {
        //      "JWT-Token": localStorage.jwtToken
        //    }
        //  }
        
        );
        setReviews(response.data.reviews);
        console.log(response.data.reviews[0].user)
      }
      fetchData();
    }, [props.reviewId])


    const [reviewFormData, setReviewFormData] = useState({
        review: ""
      });

    const handleChange = (event) => {
        setReviewFormData({ ...reviewFormData, [event.target.name]: event.target.value });
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.put(`http://localhost:8800/review/update/${props.reviewId}`, {

            review: reviewFormData.review
        });
        console.log(response);
        // localStorage.setItem("jwtToken", response.data.jwtToken);
    }

    return (
        <div>
            {console.log(reviews)}
            <h1>Update Review</h1>
                <div>   
                    {reviews?.map((review, index) => {
                        return (
                            <div key={index}>
                            <p>   Place: {review.place}</p>
                            <p>Review Posted by: {review.user}</p>
                            <p>Review: {review.review}</p>

                            <form onSubmit={handleSubmit}>                            
                                <label htmlFor="review">Update Review:</label>
                                <input name="review" id="review" onChange={handleChange} />
                                <input type="submit" />
                            </form>
                            </div>
                        )
                    })
                    }
                </div>
        </div>
    )
}

export default UpdateReview;