import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
    return (
       <Container>
         <Carousel className='bg-dark' data-bs-theme="dark" >
        <Carousel.Item>
          <img
            className="img-fluid d-block w-100"
            src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5 className='text-white'>Welcome To Hotel Site</h5>
            <p className='text-white'>Book Your Rooms</p>
          </Carousel.Caption>
        </Carousel.Item>
        
         </Carousel>
        
       </Container>
    );
};

export default Hero;