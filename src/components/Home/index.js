import NavBar from "../NavBar";
// import Login from "../Login/"
import Places from "../Places"


function Home (props){
    console.log("Welcome HOME")
    return (
      <div className="home">
        {/* <NavBar /> */}
        {/* <Login /> */}
      
        <Places />
      </div>
    );
}
export default Home;