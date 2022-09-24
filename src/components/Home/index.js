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
      <div className="title">
        <Link className="homepage" to="/">
          <div className="siteName">
            <span className="placesTG">places to go</span>
            in the <span className="bold">DMV</span>
            <p className="credit">by: vicky@vicky.wtf</p>
          </div>
        </Link>
        <NavBar />
    
      <div className="info">
        <p>
          Users can view a database of Places to go in the DC, MD, and VA area.
        </p>
        <p>Users can manually add a place to the database or search and add.</p>

        <p>Users can search for places by name, location, or keyword. Results will show name, address, phone number, website, hours, and google reviews. Users can add a place to the database from the search results.</p>
        {/* <p>
          Users can filter through the Places database by State, Tag, or Name.
        </p> */}

        This is a MongoDB full CRUD REST API built with Node.js and Express.js, with a React front-end. Still in development.

       <p><Link to="/places">Places to go in the DMV</Link></p>
      </div>
    </div>
    </div>
  );
}
export default Home;
