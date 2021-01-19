import { Container, Col, Row, Image } from "react-bootstrap";
import "../styles/about.css";

const AboutMe = () => {
  return (
    <Container fluid className="about-container">
      <Row className="mt-5">
        <Col lg={6}>
          <p className="about-text">
            Throughout my childhood and adolescence, I have moved between the
            United States, Germany, and Chile. I have always found myself
            immersed in a multicultural experience. My overall curiosity for
            general knowledge about economics, politics, and philosophy led me
            to study sociology. Furthermore, playing Jazz improvisation on the
            piano has been an integral part of me for more than 15 years. It’s
            an experience that I translate into any project that requires
            creative solutions in a limited amount of time. I am proactive and
            meticulous in everything I engage with. I work well in teams, are
            problem-solving oriented, and quickly learn what is necessary to be
            able to integrate myself into new projects. During my time studying
            sociology, I got a job offer to work for a show production company
            where I led teams and supervised dozens of shows. Also during this
            time, I had the opportunity to compose music for three theater
            plays. In August 2020 due to the the pandemic I discovered and fell
            in love with programming, especially JavaScript and React. I have
            completed various online programming certificates and I recently
            finished a programming Bootcamp. Lately, I enjoy solving algorithms
            as a pastime and I find myself unable to sleep until an item has
            been properly adjusted in my application. I would love to work in a
            company where I can contribute full-time to the creation and
            implementation of systems, as well as continuing to learn and work
            with new technologies.
          </p>
        </Col>
        <Col lg={6} className="d-flex justify-content-center mt-5">
          <Image
            src="https://res.cloudinary.com/bafian/image/upload/c_scale,h_500/Portafolio%20Gifs/otras/me_bxwnst.jpg"
            alt="A picture of Fabian Skarmeta"
            fluid
            className="image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
