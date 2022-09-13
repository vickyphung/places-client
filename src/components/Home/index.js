import NavBar from "../NavBar";
// import Login from "../Login/"
// import Places from "../Places"
import './styles.css'


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
            <a className="placesTG" href="/places">places to go</a>
          </p>
         <p>in the <span className="bold">DMV</span></p>
         
         <p className="credit">powered by: Google Places API</p>
       
        <p className="credit">© pinkybear | vicky@vicky.wtf</p>


            </div>


      </div>
    );
}
export default Home;