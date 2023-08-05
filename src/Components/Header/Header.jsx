import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/UserContext";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Hotel Site</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav.Link>
          {user?.uid ? (
            <Button onClick={logOut} className="mx-3" variant="outline-success">
              Log Out
            </Button>
          ) : (
            <>
              <Link to="/logIn">
                {" "}
                <Button className="mx-3" variant="outline-success">
                  Log In
                </Button>
              </Link>
              <Link to="/signUp">
                {" "}
                <Button variant="outline-info">Sign Up</Button>
              </Link>{" "}
            </>
          )}
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
