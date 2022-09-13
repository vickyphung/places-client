import NavBar from "../NavBar";
// import Login from "../Login/"
// import Places from "../Places"
import './styles.css'
import { Link } from "react-router-dom";


function Home (props){
    console.log("Welcome HOME")
    return (
      <div className="home">
        <NavBar />
        {/* <Login /> */}
      
        {/* <Places /> */}
        <div className="siteName"> 
          <p className="bold">free</p>
          <p className="placesTG"> 
            <Link className="placesTG" to="/places">places to go</Link>
          </p>
         <p>in the <span className="bold">DMV</span></p>
         
         <p className="credit">powered by: Google Places API</p>
       
        <p className="credit">© pinkybear | vicky@vicky.wtf</p>


            </div>


      </div>
    );
}
export default Home;