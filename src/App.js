import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Places from './components/Places';
import './App.css';
import AddPlace from './components/Places/AddPlace';
import DeletePlace from './components/Places/DeletePlace';
import UpdatePlace from './components/Places/UpdatePlace';
import User from './components/User';
import DeleteUser from './components/User/DeleteUser';
import UpdateUser from './components/User/UpdateUser';
import Login from './components/Login';
import Home from './components/Home';
import AddReview from './components/Review/AddReview';
import Review from './components/Review';
import Nearby from './components/Nearby';
import DeleteReview from './components/Review/DeleteReview';
import UpdateReview from './components/Review/UpdateReview';
import AddFavorite from './components/Favorite/AddFavorite';
import RemoveFavorite from './components/Favorite/RemoveFavorite';




function App(props) {

  const navigate = useNavigate();

  const [placeId, setPlaceId] = useState([]);

  const setDeleteIdAndLink = (id) => {
    setPlaceId(id)
    navigate('/places/delete')
  }
  const setUpdateIdAndLink = (id) => {
    setPlaceId(id)
    navigate('/places/update')
  }
  const setReviewIdAndLink = (id) => {
    setPlaceId(id)
  navigate('/review/add')
  }
  const setFavoriteIdAndLink = (id) => {
    setPlaceId(id)
  // navigate('/favorite/add')
  }
  const setRemoveFavoriteIdAndLink = (id) => {
    setPlaceId(id)
  navigate('/favorite/delete')
  }

  const [reviewId, setReviewId] = useState([]);

  const setReviewDeleteIdAndLink = (id) => {
    setReviewId(id)
    navigate('/review/delete')
  }
  const setUpdateWTF = (review) => {
    setReviewId(review)
    navigate('/review/update')
  }

  const [userId, setUserId] = useState([]);
  
    const setUserIdAndLink = (id) => {
      setUserId(id);
    };
    const setUserUpdateIdAndLink = (id) => {
      setUserId(id);
    };
    const setUserDeleteIdAndLink = (id) => {
      setUserId(id);
    };

      const setUserFavoriteIdAndLink = (id) => {
        setUserId(id);
      };


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/user"
          element={
            <User
              setLoggedInId={setUserIdAndLink}
              setReviewDeleteId={setReviewDeleteIdAndLink}
              setUpdate={setUpdateWTF}
              setFavDelId={setRemoveFavoriteIdAndLink}
              setUpdateId={setUserUpdateIdAndLink}
              setDeleteId={setUserDeleteIdAndLink}
              setUser={setUserIdAndLink}
            />
          }
        />

        <Route
          path="/places"
          element={
            <Places
              setDeleteId={setDeleteIdAndLink}
              setUpdateId={setUpdateIdAndLink}
              setReviewId={setReviewIdAndLink}
              setFavoriteId={setFavoriteIdAndLink}
              userId={userId}
              setUserFavoriteId={setUserFavoriteIdAndLink}
            />
          }
        />
        <Route path="/places/add" element={<AddPlace userId={userId} />} />
        <Route
          path="/places/delete"
          element={<DeletePlace placeId={placeId} userId={userId} />}
        />
        <Route
          path="/places/update"
          element={<UpdatePlace placeId={placeId} userId={userId} />}
        />
        <Route path="/reviews/" element={<Review />} />
        <Route
          path="/review/add"
          element={<AddReview userId={userId} placeId={placeId} />}
        />
        <Route
          path="/review/delete"
          element={
            <DeleteReview
              reviewId={reviewId}
              placeId={placeId}
              userId={userId}
            />
          }
        />
        <Route
          path="/review/update"
          element={<UpdateReview reviewId={reviewId} />}
        />
        <Route
          path="/favorite/add"
          element={<AddFavorite placeId={placeId} userId={userId} />}
        />
        <Route
          path="/favorite/delete"
          element={<RemoveFavorite placeId={placeId} userId={userId} />}
        />
        <Route path="/login" element={<Login />} />

        <Route path="/user/delete" element={<DeleteUser userId={userId} />} />
        <Route path="/user/update" element={<UpdateUser userId={userId} />} />
        <Route path="/search" element={<Nearby />} />
      </Routes>
    </div>
  );
}

export default App;
