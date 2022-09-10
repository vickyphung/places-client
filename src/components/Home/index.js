import NavBar from "../NavBar";
// import Login from "../Login/"
import Places from "../Places"


function Home (props){
    console.log("Welcome HOME")
    return (
      <div className="home">
        <NavBar />
        {/* <Login /> */}
        <h1><span className="title">places to go in the DMV</span></h1>
        <Places />
      </div>
    );
}
export default Home;