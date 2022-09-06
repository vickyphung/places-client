import NavBar from "../NavBar";
import "./style.css";
import Login from "../Login/"
import Places from "../Places"


function Home (props){
    console.log("Welcome HOME")
    return (
      <div className="home">
        <NavBar />
        {/* <Login /> */}
        places to go in the DMV<br />
        brought to you by: vicky@vicky.wtf
        <Places />
      </div>
    );
}
export default Home;