import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {FaBed,FaPeopleArrows,FaDollarSign} from 'react-icons/fa';

const Cards = () => {
  return (
    <Container className="d-flex  flex-wrap justify-content-center ">
    <div className="m-3">
      <Card style={{ width: "18rem", height:"24rem"}}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Signle Room</Card.Title>
          <Card.Text>
          Standard Single Rooms are designed in open.Concept living area and have many facilities.
          </Card.Text>
          <div className="d-flex align-items-center">
          <p className="mx-2 "><FaBed/> :1</p>
          <p className="mx-2"><FaPeopleArrows/> :1</p>
          <p className="mx-2"><FaDollarSign/> : 119</p>
          <Button variant="primary mx-2">Book</Button>
      </div>
        </Card.Body>
      </Card>
    </div>
    <div className="m-3">
      <Card style={{ width: "18rem", height:"24rem" }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Double Room</Card.Title>
          <Card.Text>
            Superior Double Rooms are perfectly equipped for travelling couples or friends.
          </Card.Text>
      <div className="d-flex align-items-center">
          <p className="mx-2 "><FaBed/> :1</p>
          <p className="mx-2"><FaPeopleArrows/> :2</p>
          <p className="mx-2"><FaDollarSign/> : 149</p>
          <Button variant="primary mx-2">Book</Button>
      </div>
        </Card.Body>
      </Card>
    </div>
    <div className="m-3">

      <Card style={{ width: "18rem", height:"24rem" }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Card.Body>
          <Card.Title>Premium Suit</Card.Title>
          <Card.Text>
           Have lots of in-room facilities and designed in open concept iving area.
          </Card.Text>
          <div className="d-flex align-items-center">
          <p className="mx-2 "><FaBed/> :2</p>
          <p className="mx-2"><FaPeopleArrows/> :4</p>
          <p className="mx-2"><FaDollarSign/>: 249</p>
          <Button variant="primary mx-2">Book</Button>
      </div>
        </Card.Body>
      </Card>
    </div>
    </Container>
  );
};

export default Cards;
