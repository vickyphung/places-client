import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';

const User = (props) => {

// const userId= "628b273367ddc3872a9271d0"
// 62aec601e6bafe39c5dfa45a

  const [userData, setUserData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(`http://localhost:8800/user/id`
        
        , {
          headers: {
            "JWT-Token": localStorage.jwtToken
          }
        }
        
        );
        console.log(response);
        setUserData(response.data.user);
      }
      fetchData();
    }, [])



  return (
    <div>
      {console.log(userData)}
      <div><NavBar /></div>

      {userData?.map((user, index) => {
        return (
          <div className="user" key={index}>     
       
            <div>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user._id}</p>
            </div>

            <div className='favs'>
            <h3>Favorites</h3>
              {
                user?.favorites?.map((favorite, index) => {
                  return(
                    <div key={index} className='review'>
                        {favorite}
                        <button onClick={() => props.setFavDelId(favorite)}>Remove Favorite</button>
                    </div>
                  )
                })
              }
            </div>

            <div className='reviews'>
            <h3>Reviews</h3>
              {
                user?.reviews?.map((review, index) => {
                  return(
                    <div key={index} className='review'>
                        {review}
                        {review.user}
                        {review.place}
                        {review.review}
                        <button onClick={() => props.setEditReviewId(review)}>Update Review</button>

                        <button onClick={() => props.setReviewDeleteId(review)}>Delete Review</button>

                    </div>
                  )
                })
              }
            </div>

          <div>
            <h3>Posts</h3>
              {
                user?.posts?.map((post, index) => {
                  return(
                    <div key={index} className='post'>
                        {post}
                        <button>Edit Post</button>
                        <button>Delete Post</button>
                    </div>
                  )
                })
              }
            </div>



            <div> 
            <h3>Functions</h3>
                <button onClick={() => props.setDeleteId(user._id)}>Delete User</button>          
                <button onClick={() => props.setUpdateId(user._id)}>Edit User</button>          
            </div> 

          </div>
        )
      })}
    </div>
  )
}

export default User;