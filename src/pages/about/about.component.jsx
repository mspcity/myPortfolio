import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import Profile from '../../assets/img/profile/profile2.webp'

import "./about.style.css";

const About = () => {
  return (
    <div id='about'>
      <div className="about">

        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            {/* Profile Pic */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            
            {/* About me description */}
            <Col xs={12} md={6}>
                <Row className="align-items-start p-2 my-details rounded">
                  {/* description */}
                  Hi there
                </Row>
                <Row>
                  {/* buttons */}
                  <Col className="d-flex justify-content-center flex-wrap">
                    <div>
                      <a href="#contact">
                        <Button className="m-2" variant="outline-primary">Let's Talk</Button>
                      </a>
                    </div>
                    <div>
                    <a href="https://drive.google.com/file/d/1dl0RkQP4EDl5NeMQ9RH6ecoGRbKo4Zxs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/mspcity" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="http://www.linkedin.com/in/young-min-park-codepark2019/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                  </Col>
                </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default About
