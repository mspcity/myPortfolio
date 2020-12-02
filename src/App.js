import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container'
import BgImage from "./assets/img/parallex/ddd.jpeg"

// components
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousel/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component"
import Skills from './pages/skills/skills.component'
import Experience from './pages/experience/experience.component'
import ProjectTimeline from './components/projects-timeline/projects-timeline.component'
import Contact from './pages/contact-form/contact-form.component';
import FooterPanel from './components/footer/footer.component';
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import './App.css';

const App = () => {
  return (
  <div className="App" style={{ position: "relative" }}>
    <MyNavbar />
    <MyCarousal />
    <TitleMessage />
    <Particles className="particles particles-box" params={particlesOptions} />
        
    {/* about me section */}
    <div>
      <Parallax blur={{ min: -30, max: 30 }}
          bgImage={ BgImage }
          bgImageAlt=""
          strength={-200}>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
      </Parallax>
    </div>
    {/*  skills section */}
    <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
              <hr />
              <Skills />
          </Slide>
        </Container>
    </div>

    {/* Experience section */}
    <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
    </div>

    {/* Project timeline */}
    <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
              <hr />
              <ProjectTimeline />
          </Slide>
        </Container>
    </div>

    {/* Contact */}
    <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Contact />
          </Fade>
        </Container>
    </div>

    {/* Footer */}
    <hr />
    <FooterPanel />
  </div>
  );
};

export default App;
