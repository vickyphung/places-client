import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navLinks">
      {/* <Link to="/">Home</Link> */}
      <Link to="/places">Places</Link>
      {/* <Link to="/login">login</Link> */}
      <Link to="/places/add">Add Place</Link>
      <Link to="/places/filter">Filter Places</Link>
       {/* <Link to="/reviews">reviews</Link> */}
      {/* <Link to="/user">user</Link>  */}
      <Link to="/search">Search and Add</Link>
    </div>
  );
}

export default NavBar;
