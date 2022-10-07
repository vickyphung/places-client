import NavBar from "../NavBar";
import "./styles.css";
import { Link } from "react-router-dom";

function Home(props) {
  console.log("Welcome HOME");
  return (
    <div className="home">
      {/* <Login /> */}

      <NavBar />

      <div className="homeIntro">
        <h1>
          <span className="title">
            Places to go in DC, Maryland, and Northern Virginia
          </span>
        </h1>
        <div className="dmvHome">
          <img
            className="dcHome"
            alt="dc flag"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Flag_Map_of_Washington_DC.png"
          ></img>

          <img
            className="mdHome"
            alt="md flag"
            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag-map_of_Maryland.svg"
          ></img>
          <img
            className="vaHome"
            alt="va flag"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag-map_of_Virginia.svg/680px-Flag-map_of_Virginia.svg.png?20220806042745"
          ></img>
        </div>
        <div className="description">
          <p>
            This is a MongoDB REST API, built with Express and Node, with a
            React front-end. Still in development.{" "}
          </p>
          <p>
            <Link className="placesLink" to="/places">
              <span className="arrow">➥</span>Places to go in the DMV
            </Link>
          </p>
        </div>
      </div>

      <div></div>
    </div>
  );
}
export default Home;
