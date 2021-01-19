import { Col, Card } from "react-bootstrap";

const CardItem = ({ colsize, project, displayProject, index }) => {
  return (
    <Col xl={colsize} lg={12} md={12} sm={12} xs={12}>
      <Card
        key={index}
        className="m-0 project-box bg-transparent p-0 border-0"
        onMouseEnter={() => displayProject(project)}
      >
        <Card.Header className="m-0 p-0 border-0 project-header bg-transparent">
          <div className="d-flex justify-content-between">
            <span className="project-title">
              {project.title}
              {project.favorite ? <i className="fas fa-star pl-1"></i> : null}
            </span>
            <span className="project-links text-right">
              {project.demo ? (
                <Card.Link className="demo" target="_blank" href={project.demo}>
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
        </Card.Header>
      </Card>
    </Col>
  );
};

export default CardItem;
