import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects screenshots
import L_GolfGroupFinder from '../../assets/img/projects/golf_group_finder.png';
import L_GolfTournamentRegistration from '../../assets/img/projects/golf_tournament_registration.png';
import L_SimpleTypingGame from '../../assets/img/projects/simple_typing_game.png';
import L_GolfCourseFinder from '../../assets/img/projects/golf_course_finder.png';

import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
// import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_RUBY from "../../assets/img/skills/ruby.svg";
import L_SINATRA from "../../assets/img/skills/sinatra.svg"
import L_RAILS from "../../assets/img/skills/rails-1.svg";


import './projects-timeline.style.css'


const ProjectTimeline = () => {
  return (
    <div id='projects'>
          <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
          <Timeline>
            <Events>
              {/* Golf Course Finder */}
              <ImageEvent
                date="10/18/2020"
                className="text-center"
                text="Golf Course Finder"
                src={L_GolfCourseFinder}
                alt="Golf Course Finder"
              >
                <div className="d-flex justify-content-between flex-column mt-1">
                  <div>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="0"
                          className="p-2 text-center accordian-main"
                        >
                          PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                          <Card.Body>
                            <strong>Description:</strong> You can find your favorite Golf Course based on people’s comments and number of likes
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                              <li>Built Single Page Application using React and Redux</li>
                              <li>Utilized Rails API for data persistence</li>
                              <li>Usage of Redux store</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  HTML5
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  CSS3
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_JAVASCRIPT}
                                    alt="JAVASCRIPT"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  Javascript
                                </span>
                              </li>
                              <li>
                              <span className="p-2">
                                <Image
                                  src={L_REACT}
                                  alt="React"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                React
                              </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_REDUX}
                                    alt="Redux"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  Redux
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_RAILS}
                                    alt="Rails"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                                  Rails
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_NODE_JS}
                                    alt="Node.js"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                                  Node.js
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_BOOTSTRAP4}
                                    alt="Bootstrap 4"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  Bootstrap 4
                                </span>
                              </li>
                
                          </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    {/* <UrlButton
                      href="https://akjha96.github.io/Todo-List-React/"
                      target="_blank"
                    >
                      SEE LIVE
                    </UrlButton> */}
                    <UrlButton
                      href="https://github.com/mspcity/react-redux-golf-course-finder"
                      target="_blank"
                    >
                      SOURCE CODE
                    </UrlButton>
                    <UrlButton
                      href="https://youtu.be/KsvFZ-ZkJp4"
                      target="_blank"
                    >
                      WATCH VIDEO
                    </UrlButton>
                  </div>
                </div>
              </ImageEvent>

              {/* Simple Typing Game */}
              <ImageEvent
                date="09/20/2020"
                className="text-center"
                text="Simple Typing Game"
                src={L_SimpleTypingGame}
                alt="Simple Typing Game"
              >
                <div className="d-flex justify-content-between flex-column mt-1">
                  <div>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="0"
                          className="p-2 text-center accordian-main"
                        >
                          PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                          <Card.Body>
                            <strong>Description:</strong> You can practice to increase your typing skill
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                              <li>Utilized JS to build interactive web applications</li>
                              <li>Utilizes Rails API & MVC architecture pattern with CRUD & Restful to easily create & delete your game score</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  HTML5
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  CSS3
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_JAVASCRIPT}
                                    alt="JAVASCRIPT"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  Javascript
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_RAILS}
                                    alt="Rails"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                                  Rails
                                </span>
                              </li>
                
                          </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    {/* <UrlButton
                      href="https://akjha96.github.io/Todo-List-React/"
                      target="_blank"
                    >
                      SEE LIVE
                    </UrlButton> */}
                    <UrlButton
                      href="https://github.com/mspcity/js-rails-typing-game"
                      target="_blank"
                    >
                      SOURCE CODE
                    </UrlButton>
                    <UrlButton
                      href="https://youtu.be/EnsW2SnPjeQ"
                      target="_blank"
                    >
                      WATCH VIDEO
                    </UrlButton>
                  </div>
                </div>
              </ImageEvent>

              {/* Golf Tournament Registration */}
              <ImageEvent
                date="08/23/2020"
                className="text-center"
                text="Golf Tournament Registration"
                src={L_GolfTournamentRegistration}
                alt="Golf Tournament Registration"
              >
                <div className="d-flex justify-content-between flex-column mt-1">
                  <div>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="0"
                          className="p-2 text-center accordian-main"
                        >
                          PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                          <Card.Body>
                            <strong>Description:</strong> You can register for the Golf Tournament you want to participate in.
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                              <li>Built in Ruby on Rails using the OmniAuth to login with 3rd party accounts (ex. Github, Facebook, Google)</li>
                              <li>Utilizes MVC architecture pattern with CRUD & Restful to easily create, update & delete registrations</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                            <li>
                                <span className="p-2">
                                  <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  HTML5
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  CSS3
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_RUBY}
                                    alt="Ruby"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  Ruby
                                </span>
                              </li>
                  
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_RAILS}
                                    alt="Rails"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                                  Rails
                                </span>
                              </li>
                              
                            </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    {/* <UrlButton
                      href="https://akjha96.github.io/Todo-List-React/"
                      target="_blank"
                    >
                      SEE LIVE
                    </UrlButton> */}
                    <UrlButton
                      href="https://github.com/mspcity/rails-golf-tournament-registration"
                      target="_blank"
                    >
                      SOURCE CODE
                    </UrlButton>
                    <UrlButton
                      href="https://youtu.be/KF6paY0QHlU"
                      target="_blank"
                    >
                      WATCH VIDEO
                    </UrlButton>
                  </div>
                </div>
              </ImageEvent>

              {/* Project: Golf Group Finder */}
            <ImageEvent
                date="07/20/2020"
                className="text-center"
                text="Golf Group Finder"
                src={L_GolfGroupFinder}
                alt="Golf Group Finder"
              >
                <div className="d-flex justify-content-between flex-column mt-1">
                  <div>
                    <Accordion>
                      <Card>
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey="0"
                          className="p-2 text-center accordian-main"
                        >
                          PROJECT DETAILS
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                          <Card.Body>
                            <strong>Description:</strong> You can find the people who play Golf together
                            <hr />
                            <strong>Features:</strong>
                            <ul className="list-styles pt-1">
                              <li>Built in Sinatra Ruby using MVC software design pattern to divide login into interconnected elements</li>
                              <li>Responding to HTTP with GET & POST methods | CRUD & Restful to help users find or register their schedules</li>
                            </ul>
                            <hr />
                            <strong>Tech used:</strong>
                            <ul>
                             <li>
                              <span className="p-2">
                                  <Image
                                    src={L_HTML5}
                                    alt="HTML 5"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  HTML5
                              </span>
                             </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_CSS3}
                                    alt="CSS 3"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  CSS3
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_RUBY}
                                    alt="Ruby"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  Ruby
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_SINATRA}
                                    alt="Sinatra"
                                    rounded
                                    className="image-style m-1"
                                  ></Image>{" "}
                                  Sinatra
                                </span>
                              </li>
                              <li>
                                <span className="p-2">
                                  <Image
                                    src={L_MATERIALUI}
                                    alt="Material-UI"
                                    rounded
                                    className="image-style1 m-1"
                                  ></Image>{" "}
                                  Material-UI
                                </span>
                              </li>
                              
                            </ul>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                  <div className="d-flex justify-content-between flex-nowrap text-center">
                    {/* <UrlButton
                      href="https://akjha96.github.io/Todo-List-React/"
                      target="_blank"
                    >
                      SEE LIVE
                    </UrlButton> */}
                    <UrlButton
                      href="https://github.com/mspcity/sinatra-golf-group-finder"
                      target="_blank"
                    >
                      SOURCE CODE
                    </UrlButton>
                    <UrlButton
                      href="https://youtu.be/WSQtrxkFL5Q"
                      target="_blank"
                    >
                      WATCH VIDEO
                    </UrlButton>
                  </div>
                </div>
              </ImageEvent>
            </Events>
          </Timeline>

    </div>
  )
}

export default ProjectTimeline
