import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navLinks">
      <Link className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/login">Login</Link>
      <Link className="navLink" to="/user">User</Link> 

      <Link className="navLink" to="/places">Places </Link>
      <Link className="navLink" to="/places/add">Add </Link>
      <Link className="navLink" to="/places/filter">Filter</Link>
      <Link className="navLink" to="/search">Search+/Add </Link>
      {/* <Link className="navLink" to="/reviews">Reviews</Link> */}

    </div>
  );
}

export default NavBar;
