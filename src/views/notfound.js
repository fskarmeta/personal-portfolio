import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    history.push("/");
  });

  return (
    <Container>
      <Row className="mt-5">
        <p className="text-center">Page not found 404</p>
      </Row>
    </Container>
  );
};

export default NotFound;
