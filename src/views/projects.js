import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/projectCard";
import CardItem from "../components/itemCard";
import CardItemAccordion from "../components/itemCardAccordion";
import PROJECTS from "../assets/projects";
import "../styles/projects.css";

const Projects = () => {
  const [project, setProject] = useState({
    title: "A note about this section",
    image:
      "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/hello_world_mhiqdg.png",
    description: `Although I'm in the opinion that tutorials are a great way to learn, I think that they don't deserve to be showcased in this section. All projects showcased here have been done applying my own style of coding and always trying to minimize as much as possible any outside help. If I would add a project done after following a tutorial I would add the corresponding credits.`,
  });

  const [filter, setFilter] = useState("github");
  const [colsize, setColsize] = useState(4);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 989;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

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
      <Row className="project-container">
        <Col xl={8} lg={8} md={12} sm={12} xs={12} className="projects-list">
          {/* <Row className="d-flex justify-content-center"> */}
          <div className="filter d-flex w-50 justify-content-between mb-2 mt-2">
            <span
              className="filter-link mr-1 ml-3"
              onMouseOver={() => resetArr("github")}
            >
              All
            </span>
            <span
              className="filter-link mr-1"
              onMouseOver={() => filterArr("favorite")}
            >
              Favorites
            </span>
            <span
              className="filter-link mr-1"
              onMouseOver={() => filterArr("backend")}
            >
              Backend
            </span>
            <span
              className="filter-link mr-2"
              onMouseOver={() => filterArr("snipet")}
            >
              Smaller
            </span>
          </div>
          {/* </Row> */}
          <Row
            className="projects mt-2 d-flex justify-content-center"
            id="style13"
          >
            {PROJECTS.filter((p) => p[`${filter}`]).map((project, index) =>
              width < breakpoint ? (
                <CardItemAccordion
                  colsize={colsize}
                  project={project}
                  index={index}
                  className="accordion-card"
                  key={index}
                />
              ) : (
                <CardItem
                  colsize={colsize}
                  project={project}
                  displayProject={displayProject}
                  index={index}
                  key={index}
                />
              )
            )}
          </Row>
        </Col>
        <Col className={width < breakpoint ? "d-none" : "project-detail"}>
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
