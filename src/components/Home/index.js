import NavBar from "../NavBar";
import "./style.css";
import { Container } from "@chakra-ui/react";
import CreateUser from "../Login/CreateUser";
import UserLogin from "../Login/UserLogin";

function Home (props){
    console.log("Welcome HOME")
    return (
      <div className="home">
        <NavBar />
        <div className="homeTitle">
          <h1>places</h1>
        </div>
        <Container className="createUser" maxW="md" bg="blue.600" color="white">
          <CreateUser />
        </Container>
        <Container className="loginUser" maxW="md" bg="blue.400" color="white">
          <UserLogin />
        </Container>
      </div>
    );
}
export default Home;