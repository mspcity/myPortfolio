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
                  Hi there! I am <strong>&nbsp;Young Min Park</strong>
                  <br />I have received my B.S degree at the University of Minnesota in 2014. I have a successful record of my academic achievments majoring Sustainable Systems Management and minoring Management at Carlson School of Management.<br />
                  <br /> I have worked in Business field for few years. But I decided to follow my passion which is Software Engineering. Recently, I have graduated Flatiron School for Software Engineering.<br />
                  <br />I am a dedicated and eager Software Engineer with a background in Marketing. Using communication skills sharpened through sales, I drive to meet the needs of both internal & external customers. I have a passion for Golf, so I’ve built both a Golf Course Finder & Golf Group Finder to support my desire to play. I want to Combine my new skills with my lifelong desire to grow in tech, I’m excited to continue to learn, grow & expand my ability to be a cohesive teammate. <br />
                  <br /> I am an extremely hard working person with a detail orinted and collaborative personality. I believe that I have the initiative to succeed and I believe I have developed the skills throughout my experiences that allow me to do so.<br />
                  
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
                    <a href="https://drive.google.com/file/d/1mwckfFLPygjytyU8tG7vP-Xk-Z1jfbgD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
