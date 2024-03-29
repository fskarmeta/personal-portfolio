import { Container, Col, Row } from "react-bootstrap";
// import pdf from "../assets/Fabian_Skarmeta_English_Resume_April_2021.pdf";
import "../styles/contact.css";
import { ReactComponent as Icon } from "../assets/owl.svg";

const Contact = ({ inside }) => {
  const mouseInside = {
    animation: "rotation 160s infinite linear",
    animationPlayState: "running",
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
              <h2 className="font-italic">Full-Stack Developer</h2>
              <h3 className="font-italic small contact">
               JavaScript, Python, React/Next.js, Vue/Nuxt.js, Node.js, Flask, Git, MongoDB, Firebase, SQL, GraphQL, Strapi, Scrum
              </h3>
              <p>Santiago, Berlin</p>
            </div>
            <div className="icons">
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
                href="https://gitlab.com/fskarmeta"
                target="_blank"
                className="social-link m-1"
                rel="noreferrer"
              >
                <i className="fab fa-gitlab social-icon fa-2x"></i>
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
              {/* <a
                href={pdf}
                download
                target="_blank"
                className="social-link m-1"
                rel="noreferrer"
              >
                <i className="far fa-file-pdf social-icon fa-2x"></i>
              </a> */}
            </div>
            <a href="https://www.youtube.com/watch?v=21qfRm637xc" target="_blank" rel="noreferrer">
            <span className="cave">
              <Icon
                alt="Decoration"
                style={inside ? mouseInside : mouseOutside}
              />
            </span>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
