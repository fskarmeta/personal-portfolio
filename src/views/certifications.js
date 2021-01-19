import CERTIFICATES from "../assets/certificatesData";
import { Container, Row } from "react-bootstrap";
import CertificationTable from "../components/certificationTable";

const Certifications = () => {
  return (
    <Container>
      <Row className="mt-5">
        <CertificationTable certs={CERTIFICATES} />
      </Row>
    </Container>
  );
};

export default Certifications;
