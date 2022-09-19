import NavBar from "../NavBar";
// import Login from "../Login/"
// import Places from "../Places"
import "./styles.css";
import { Link } from "react-router-dom";

function Home(props) {
  console.log("Welcome HOME");
  return (
    <div className="home">
      <NavBar />
      {/* <Login /> */}

      {/* <Places /> */}
      <div className="siteName">
        <p className="bold">free</p>
        <p className="placesTG">
          <Link className="placesTG" to="/places">
            places to go
          </Link>
        </p>
        <p>
          in the <span className="bold">DMV</span>
        </p>
        <p className="credit">© pinkybear | vicky@vicky.wtf</p>
      </div>
      <div>
        <p>
          Users can view a database of Places to go in the DC, MD, and VA area. 
        </p>
        <p>Users can manually add a place to the database.</p>
        <p>Users can also edit or delete a place. (User validation is still in development).</p>
        <p>Users can search for places using Google Maps Places API.</p>
        <p>Search Results will show detailed information, including operation status, phone number, link, address, hours, and google reviews.</p>
        <p>Users can add a place to the database from the search resutls.</p>
        <p>Users can filter through the Places database via State, Tag, or Name.</p>
      </div>
    </div>
  );
}
export default Home;
