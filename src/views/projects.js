import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Accordion,
  AccordionToggle,
} from "react-bootstrap";
import ProjectCard from "../components/projectCard";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import PROJECTS from "../items";
import "../styles/projects.css";

const Projects = () => {
  const [project, setProject] = useState({
    title: PROJECTS[0].title,
    image: PROJECTS[0].image,
    description: PROJECTS[0].description,
  });

  const [filter, setFilter] = useState("github");
  const [colsize, setColsize] = useState(4);

  //   const decoratedOnClick = useAccordionToggle(eventKey, onClick);

  function displayProject(project) {
    setProject({
      title: project.title,
      image: project.image,
      description: project.description,
    });
  }

  function filterArr(prop) {
    setFilter(prop);
    setColsize(12);
  }

  function resetArr(prop) {
    setFilter(prop);
    setColsize(4);
  }

  return (
    <Container fluid>
      <Row clasName="project-container">
        <Col xl={8} md={6} sm={12} xs={12} className="projects-list">
          <Row className="d-flex justify-content-center">
            <div className="filter d-flex w-75 justify-content-between mb-2">
              <span
                className="filter-link"
                onMouseOver={() => resetArr("github")}
              >
                All
              </span>
              <span
                className="filter-link"
                onMouseOver={() => filterArr("favorite")}
              >
                Favorites
              </span>
              <span
                className="filter-link"
                onMouseOver={() => filterArr("backend")}
              >
                Backend
              </span>
              <span
                className="filter-link"
                onMouseOver={() => filterArr("snipet")}
              >
                Excercises
              </span>
            </div>
          </Row>
          <Row
            className="projects mt-2 d-flex justify-content-center"
            id="style13"
          >
            {PROJECTS.filter((p) => p[`${filter}`]).map((project, index) => (
              <Col xl={colsize} lg={12} md={12} sm={12} xs={12}>
                <Accordion className="border-0 bg-transparent">
                  <Card
                    key={index}
                    className="m-0 project-box bg-transparent p-0 border-0"
                    onMouseEnter={() => displayProject(project)}
                  >
                    <Card.Header className="m-0 p-0 border-0">
                      <Accordion.Toggle
                        as={Card}
                        variant="link"
                        eventKey={index}
                        className="m-0 p-0 border-0 bg-transparent"
                      >
                        <div className="d-flex justify-content-between">
                          <span className="project-title">
                            {project.title}
                            {project.favorite ? (
                              <i className="fas fa-star pl-1"></i>
                            ) : null}
                          </span>
                          <span className="project-links text-right">
                            {project.demo ? (
                              <Card.Link
                                className="demo"
                                target="_blank"
                                href={project.demo}
                              >
                                <span className="demo-text">Demo</span>
                              </Card.Link>
                            ) : null}

                            <Card.Link
                              className="icon-link"
                              target="_blank"
                              href={project.github}
                            >
                              <i className="fab fa-github"></i>
                            </Card.Link>
                          </span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="stack font-italic align-self-center">
                            {project.stack}
                          </span>
                          <span className="project-links text-right align-self-center">
                            <span className="project-date">{project.date}</span>
                          </span>
                        </div>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                      <Card.Body className="text-danger">
                        Hello! I'm the body
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            ))}
          </Row>
        </Col>
        <Col
          //   xl={4}
          //   lg={2}
          //   mg={2}
          //   sm={12}
          //   xs={12}
          className="project-detail"
        >
          <ProjectCard
            title={project.title}
            image={project.image}
            description={project.description}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
