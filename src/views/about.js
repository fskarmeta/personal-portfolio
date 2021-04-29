import { Container, Col, Row, Image } from "react-bootstrap";
import "../styles/about.css";

const AboutMe = () => {
  return (
    <Container fluid className="about-container">
      <Row className="mt-5 about">
        <Col lg={6}>
          <p className="about-text">
            Throughout my childhood and adolescence, I have moved between the
            United States, Germany, and Chile. My overall curiosity for
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
            in love with programming. I have
            completed various online programming certificates and I recently
            finished a programming Bootcamp. Currently, I'm working as a FrontEnd
            Developer with the Vue, Vuex, Firebase, and Quasar stack but I'm always
            opened to new opportunities in places where I can learn and work with
            new technologies. I enjoy what I do and I'm always going to try my best
            to make you happy with my work.
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
