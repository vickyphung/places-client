import "./style.css";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <div className="navLinks">
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">places</Nav.Link>
        </Nav.Item>

<<<<<<< HEAD
        {/* <Nav.Item>
                    <Nav.Link href="/login">login</Nav.Link>
                </Nav.Item> */}

        {/* <Nav.Item>
                    <Nav.Link href="/places">places</Nav.Link>
                </Nav.Item> */}

        <Nav.Item>
          <Nav.Link href="/places/add">add place manually</Nav.Link>
        </Nav.Item>

        {/* <Nav.Item>
                    <Nav.Link href="/reviews">reviews</Nav.Link>
                </Nav.Item> */}
        {/* 
=======

function NavBar (){
    return (
        <div className="navLinks">

            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">places</Nav.Link>
                </Nav.Item>

                {/* <Nav.Item>
                    <Nav.Link href="/login">login</Nav.Link>
                </Nav.Item> */}

                {/* <Nav.Item>
                    <Nav.Link href="/places">places</Nav.Link>
                </Nav.Item> */}

                <Nav.Item>
                    <Nav.Link href="/places/add">add place manually</Nav.Link>
                </Nav.Item>

                {/* <Nav.Item>
                    <Nav.Link href="/reviews">reviews</Nav.Link>
                </Nav.Item> */}
{/* 
>>>>>>> 88b2ea0b6953da6cc85dba33c2c67652231480e2
                <Nav.Item>
                    <Nav.Link href="/user">user</Nav.Link>
                </Nav.Item> */}

        <Nav.Item>
          <Nav.Link href="/search">search</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar;
