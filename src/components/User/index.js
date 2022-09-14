import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UpdateReview from '../Review/UpdateReview';
// import DeleteReview from "../Review/DeleteReview";
import NavBar from '../NavBar';
import './style.css'


const User = (props) => {

  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          `https://placeswithbear.herokuapp.com/user/id`,
          {
            headers: {
              "JWT-Token": localStorage.jwtToken,
            },
          }
        );
        console.log(response);
        setUserInfo(response.data.user);
        console.log(response.data.user[0]._id);
        // eslint-disable-next-line
        props.setLoggedInId(response.data.user[0]._id);
        props.setUser(response.data.user[0]._id);
      }
      fetchData();
    }, [props])

  return (
    <div>
      <div>
        <NavBar />
        <h1>User</h1>
        <hr></hr>
        {userInfo?.map((user, index) => {
          return (
            <div className="user" key={index}>
              <div className="user">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user._id}</p>
              </div>

              <div className="favs">
                <h3>Favorites</h3>
                {user?.favorites?.map((favorite, index) => {
                  return (
                    <div key={index} className="delFav">
                      {favorite}
                      <button
                        onClick={() => props.setRemoveFavoriteId(favorite)}
                      >
                        Remove Favorite
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="reviews">
                <h3>Reviews</h3>
                {user?.reviews?.map((review, index) => {
                  return (
                    <div key={index} className="review">
                      {review}
                      {/* {review.user}
                    {review.place}
                    {review.review} */}
<div className="updateRev">
                      <UpdateReview reviewId={review} />
                    </div>  {/* <DeleteReview reviewId={review} /> */}
                      <button onClick={() => props.setReviewDeleteId(review)}>
                        Delete Review
                      </button>
                    </div>
                  );
                })}
              </div>

              <div>
                <h3>Posts</h3>
                {user?.posts?.map((post, index) => {
                  return (
                    <div key={index} className="post">
                      {post}
                      <button onClick={() => props.setDeleteId(post)}>
                        Delete
                      </button>
                      <button onClick={() => props.setUpdateId(post)}>
                        Edit
                      </button>
                    </div>
                  );
                })}
              </div>

              <div>
                <h3>Functions</h3>
                <button onClick={() => navigate("/user/delete")}>
                  Delete User
                </button>
                <br></br>
                <button onClick={() => navigate("/user/update")}>
                  Update User
                </button>
                {/* <button onClick={() => props.setUpdateId(user._id)}>
                  Edit User
                </button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default User;