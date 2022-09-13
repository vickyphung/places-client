import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navLinks">
      <Link to="/">home</Link>
      <Link to="/places">places</Link>

      {/* <Link to="/login">login</Link>
                    <Link to="/places">places</Link> */}

      <Link to="/places/add">add place manually</Link>

      {/* <Link to="/reviews">reviews</Link>
                    <Link to="/user">user</Link> */}

      <Link to="/search">search</Link>
    </div>
  );
}

export default NavBar;
