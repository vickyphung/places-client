import React, { useState } from 'react';
import axios from 'axios';


const AddReview = (props) => {

    console.log(props.userId);
    console.log(props.placeId)

    const fakeUserId = "62b5153a18a020243c4bb4a0";

    const [reviewFormData, setReviewFormData] = useState({
        review: ""
      });

    const handleChange = (event) => {
        setReviewFormData({ ...reviewFormData, [event.target.name]: event.target.value });
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(`http://localhost:8800/review/`, {
          // user: `${props.userId}`,
          user: `${fakeUserId}`,

          place: `${props.placeId}`,
          review: reviewFormData.review,
        });
        console.log(response);
        localStorage.setItem("jwtToken", response.data.jwtToken);
    
    }

    return (
        <div>
            <h1>Add Review</h1>
                <div>        
                    <form onSubmit={handleSubmit}>                            
                        <label htmlFor="review">Review:</label>
                        <input name="review" id="review" onChange={handleChange} />
                        <input type="submit" />
                    </form>
                </div>





        </div>
    )
}

export default AddReview;