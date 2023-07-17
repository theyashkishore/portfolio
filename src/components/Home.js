import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
// import homeLogo from "/Users/yashkishore/Desktop/Portfolio/src/Assets/home-main.svg";
import homeLogo from "/Users/yashkishore/Desktop/Portfolio/src/Assets/home-main.png";
import Particle from "./Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "./About";
import Projects from "./Projects";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Yash Kishore</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} className="myLogo">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "600px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About />
      <Projects />
    </section>
  );
}

export default Home;
