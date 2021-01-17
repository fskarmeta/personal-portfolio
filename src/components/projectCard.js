import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../styles/projectcard.css";

const ProjectCard = ({ title, image, description }) => {
  return (
    <Container className="project-detail-container mt-4">
      <Row className="title-box d-flex justify-content-center align-content-center text-uppercase">
        {title}
      </Row>
      <Row className="image-box d-flex justify-content-center align-content-center">
        <Image className="img-responsive" src={image} fluid />
      </Row>
      <Row className="description-box d-flex justify-content-center align-content-center text-jusitfy">
        {description}
      </Row>
    </Container>
  );
};

export default ProjectCard;
