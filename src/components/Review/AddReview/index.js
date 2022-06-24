import React, { useState } from 'react';
import axios from 'axios';
import NavBar from '../../NavBar';


const AddReview = (props) => {

    const userId="628b273367ddc3872a9271d0"

    console.log(props.placeId)



    const [reviewFormData, setReviewFormData] = useState({
        review: ""
      });

    const handleChange = (event) => {
        setReviewFormData({ ...reviewFormData, [event.target.name]: event.target.value });
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(`http://localhost:8800/review/`, {
            user: `${userId}`,
            place: `${props.placeId}`,
            review: reviewFormData.review
        });
        console.log(response);
        // localStorage.setItem("jwtToken", response.data.jwtToken);
    
    }

    return (
        <div>
            <NavBar />
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