import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "./Particle";
// import hotel from "../../Assets/Projects/chatify.png";
import hotel from "/Users/yashkishore/Desktop/Portfolio/src/Assets/Projects/chatify.png";
// import sortingVis from "../../Assets/Projects/blog.png";
import sortingVis from "/Users/yashkishore/Desktop/Portfolio/src/Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
        Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Sun Rise Hotel Management"
              description="Designed a user-friendly hotel management system website and optimized the user experience. Implemented functionalities including room reservation, guest management, and invoice downloading, utilizing the super admin page. Built this web-based HMS using PHP and MySQL."
              ghLink="https://github.com/theyashkishore/hotel-management-system"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sortingVis}
              isBlog={false}
              title="Sorting Visualizer"
              description="Created a web-based sorting visualizer application showcasing the functionality of six different sorting algorithms: selection sort, insertion sort, quicksort, heap sort, bubble sort, and mergesort. Intuitive user interface enabling users to modify the sorting speed, array size, and algorithm type based on their preference."
              ghLink="https://github.com/theyashkishore/sorting-visualizer"
              // demoLink=""
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
