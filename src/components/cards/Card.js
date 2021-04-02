import {Card} from "react-bootstrap";
import "./Cards.css";
const Cards = () => {
    return ( 
        <div className="wrapper">
            <div>
                <h3>WHAT WE OFFER</h3>
            </div>
<div className="cards">
           <Card style={{ width: '18rem', margin:"10px" }} className="cardOne">
            <div className="imgBody">
            <Card.Img variant="top" src="../Img/sch.png" className="imgs"/>
            </div>
            <Card.Body className="cardBody">
                <Card.Title>UNIVERSITY</Card.Title>
                <Card.Text>
                Select a university of your choice and we would provide you with all necessary information
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem',margin:"10px" }} className="cardOne">
            <div className="imgBody">
            <Card.Img variant="top" src="../Img/course.png" className="imgs"/>
            </div>
            <Card.Body className="cardBody">
                <Card.Title>COURSES</Card.Title>
                <Card.Text>
                Get access to every resources and information you need to know about your course of choice
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin:"10px" }} className="cardOne">
            <div className="imgBody">
            <Card.Img variant="top" src="../Img/globe.png" className="imgs"/>
            </div>
            <Card.Body className="cardBody">
                <Card.Title>GLOBAL AND LOCAL EVENTS</Card.Title>
                <Card.Text>
                we provide methorship to secondary school students  on how to  go about seleting their choice course 
                </Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem',margin:"10px" }} className="cardOne">
            <div className="imgBody">
            <Card.Img variant="top" src="../Img/peps.png" className="imgs"/>
            </div>
            <Card.Body className="cardBody">
                <Card.Title>MENTORSHIPS</Card.Title>
                <Card.Text>
                Experience one-on-one mentorship with our facilitators who have acquired vast knowledge and experiences in the field.
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
        </div> 
    );
}
 
export default Cards;