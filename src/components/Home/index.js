import NavBar from "../NavBar";
// import Login from "../Login/"
// import Places from "../Places"
import "./styles.css";
import { Link } from "react-router-dom";

function Home(props) {
  console.log("Welcome HOME");
  return (
    <div className="home">
      {/* <Login /> */}

      {/* <Places /> */}
      <div className="top">
        <Link className="homepage" to="/">
          <div className="siteName">
            <span className="bold">places to go </span>
            in the <span className="bold">DMV</span>
            <p className="credit">by: vicky@vicky.wtf</p>
          </div>
        </Link>
        <NavBar />
        </div>
    
      <div className="info">


        <h1><span className="dmv">Places to go in DC, Maryland, and Northern Virignia</span></h1>



        <p>
          View a database of places to go in the DMV area. Add a place to database, like places, or leave a review. Filter places by name, state, or tag. Search for places to add to database using Google Places API. Search results include detailed information and reviews. </p>
        {/* <p>
          Users can filter through the Places database by State, Tag, or Name.
        </p> */}

        <p>This is a MongoDB full CRUD REST API built with Node.js and Express.js, with a React front-end. This app is still in development. Thank you and enjoy!</p>

       <p><Link className="placesLink" to="/places">➤Places to go in the DMV</Link></p>
      </div>
    </div>
  );
}
export default Home;
