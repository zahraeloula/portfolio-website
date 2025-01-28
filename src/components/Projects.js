import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/devops.png";
import projImg2 from "../assets/img/coco.png";
import projImg3 from "../assets/img/BI.png";
import projImg4 from "../assets/img/xp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "DevOps Project CI/CD Pipeline Automation",
      description: "Designed and implemented a CI/CD pipeline to automate testing, building, and deployments, improving efficiency, reducing errors, and enabling real-time monitoring",
      imgUrl: projImg1,
      tools: ["Jenkins", "Docker","Prometheus", "Grafana", "Nexus", "SonorQube"], 
    },
    {
      title: "CoConsult – Full-Stack ERP for SMEs",
      description: "Built a full-stack ERP application to manage business processes for SMEs, with features like client and project management ",
      imgUrl: projImg2,
    tools: ["Angular", "Spring Boot", "MySQL"],
    },
    {
      title: "BI Project – Restaurant Sales Optimization",
      description: "Designed an ETL pipeline and dashboards to analyze sales data and boost revenue with machine learning recommendations",
      imgUrl: projImg3,
        tools: ["Python", "Pandas", "SQL", "Power BI", "Scikit-learn", "TensorFlow"],
    },
    {
      title: "XperienceZone Full-stack Event Management Platform",
      description: "Developed a full-stack platform for managing events, selling tickets, and handling shopping carts",
      imgUrl: projImg4,
        tools: ["Symfony", "JavaFx", "MySql" ],   
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Throughout my career, I have had the opportunity to work on a variety of impactful projects that have allowed me to develop and refine my skills in software development, data analysis, and system automation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
  
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
