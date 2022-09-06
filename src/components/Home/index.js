import NavBar from "../NavBar";
import "./style.css";
import Login from "../Login/"



function Home (props){
    console.log("Welcome HOME")
    return (
      <div className="home">
        <NavBar />
        <Login />
      </div>
    );
}
export default Home;