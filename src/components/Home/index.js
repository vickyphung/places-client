import NavBar from "../NavBar";
import User from "../User";
import Login from "../Login";
import Container from "react-bootstrap/esm/Container";

function Home (props){
    console.log("Welcome HOME")
    return (
      <div>
        <NavBar />
        <Container>
          <h1>places</h1>
          <hr></hr>
          <Login />
          <User />
        </Container>
      </div>
    );
}
export default Home;