import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container";
import Tilt from 'react-tilt'
import Card from "react-bootstrap/Card";

import './experience.style.css'


const Experience = () => {
  return (
    <div id='experience'> 
          <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
          <Jumbotron className="jumbo-style">
            <Container>
              <Tilt options={{ max: 25 }}>
              <Card>
                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                  {/* <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Accenture logo" /> */}
                </Card.Header>
                <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Assistant Sales Manager</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    Duration:
                    Description:
                  </Card.Text>
                </div>
                </Card.Body>
              </Card>
              </Tilt>

            </Container>
          </Jumbotron>
    </div>
  )
}

export default Experience
