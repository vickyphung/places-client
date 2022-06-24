
import './style.css'
import Nav from 'react-bootstrap/Nav'


function NavBar (){
    return (
        <div className="navLinks">

            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">home</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/login">login</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/places">places</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/places/add">add place</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/reviews">reviews</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/user">user</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/nearby">nearby</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}


export default NavBar;