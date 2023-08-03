import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
const Header = () => {
    return (
        
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Hotel Site</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav.Link>
              <Button className='mx-3' variant="outline-success">Log In</Button>
              <Button variant="outline-info">Sign Up</Button>
            </Nav.Link>

        </Container>
      </Navbar>

        
    );
};

export default Header;