import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (


    <div className="navBar">

      <div className="dmv">
    <img className="dc" alt="dc flag" src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Flag_Map_of_Washington_DC.png"></img>
      
      <img className="md" alt="md flag" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag-map_of_Maryland.svg"></img> 
      <img className="va" alt="va flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag-map_of_Virginia.svg/680px-Flag-map_of_Virginia.svg.png?20220806042745"></img>
    
      </div>

    <div className="navLinks">
      <Link className="navLink" to="/">Home</Link>
      <Link className="navLink" to="/login">Login</Link>
      <Link className="navLink" to="/user">User</Link> 

      <Link className="navLink" to="/places">Places </Link>
      <Link className="navLink" to="/places/add">Add </Link>
      {/* <Link className="navLink" to="/places/filter">Filter</Link> */}
      <Link className="navLink" to="/search">Search+/Add </Link>
      {/* <Link className="navLink" to="/reviews">Reviews</Link> */}
    </div>
    </div>

  );
}

export default NavBar;
