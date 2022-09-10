import NavBar from "../NavBar";
<<<<<<< HEAD
// import Login from "../Login/"
=======
import "./style.css";
import Login from "../Login/"
>>>>>>> 88b2ea0b6953da6cc85dba33c2c67652231480e2
import Places from "../Places"


function Home (props){
    console.log("Welcome HOME")
    return (
      <div className="home">
        <NavBar />
        {/* <Login /> */}
<<<<<<< HEAD
        <h1><span className="title">places to go in the DMV</span></h1>
=======
        places to go in the DMV<br />
        brought to you by: vicky@vicky.wtf
>>>>>>> 88b2ea0b6953da6cc85dba33c2c67652231480e2
        <Places />
      </div>
    );
}
export default Home;