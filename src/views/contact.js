import { Container, Col, Row, Image } from "react-bootstrap";
import pdf from "../assets/Fabian_Skarmeta_resume.pdf";
import "../styles/contact.css";
import { ReactComponent as Icon } from "../assets/owl.svg";

const Contact = ({ inside }) => {
  const mouseInside = {
    animation: "rotation 160s infinite linear",
    color: "white",
    fill: "white",
  };

  const mouseOutside = {
    // animation: "rotation 120s infinite linear",
    fill: "white",
    color: "white",
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={12} xs={12} className="mt-4" style={{ height: "80vh" }}>
            <div>
              <h1>Fabián Skármeta</h1>
              <h2 className="font-italic">Junior Full-Stack Developer</h2>
              <h3 className="font-italic small">
                JavaScript, React, NodeJS, Bootstrap, HTML5, CSS3, Python,
                Flask, MySQL
              </h3>
              <p>Santiago, Chile</p>
            </div>
            <div className="icons mt-5">
              <a
                href="https://github.com/fskarmeta"
                target="_blank"
                className="social-link m-1"
                rel="noreferrer"
              >
                <i className="fab fa-github social-icon fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/fabianskarmeta/"
                target="_blank"
                className="social-link m-1"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin social-icon fa-2x"></i>
              </a>
              <a
                href="https://twitter.com/fskarmeta"
                target="_blank"
                className="social-link m-1"
                rel="noreferrer"
              >
                <i className="fab fa-twitter-square social-icon fa-2x"></i>
              </a>
              <a
                href="https://www.freecodecamp.org/bafian"
                target="_blank"
                className="social-link m-1"
                rel="noreferrer"
              >
                <i className="fab fa-free-code-camp social-icon fa-2x"></i>
              </a>
              <a
                href="mailto:fabian.skarmeta@gmail.com"
                target="_blank"
                className="social-link m-1"
                rel="noreferrer"
              >
                <i className="fas fa-envelope-square social-icon fa-2x"></i>
              </a>
              <a
                href={pdf}
                download
                target="_blank"
                className="social-link m-1"
                rel="noreferrer"
              >
                <i className="far fa-file-pdf social-icon fa-2x"></i>
              </a>
            </div>
            <Icon
              alt="Decoration"
              className="cave"
              style={inside ? mouseInside : mouseOutside}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
