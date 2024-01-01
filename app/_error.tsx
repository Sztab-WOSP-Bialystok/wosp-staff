"use client";

import { Container, Row, Col, Card } from "react-bootstrap";

//import Error from "next/error";

// interface ErrorPageProps{
//   error: Error;
//   reset: () => void;
// }
function Error({ statusCode }) {
  return (
    <Container className="mt-2 mt-sm-3 mt-xl-5">
      <Row>
        <Col xs={12} xl={8} className="my-3 my-xl-5">
          <Card>
            <Card.Body>
              <Card.Title>
                <h2>Oops</h2>
              </Card.Title>
              <h4 className="my-3">
                W razie dalszego występowania błędu skontaktuj się z
                administratorem.
              </h4>
              <h5 className="my-3 theme-pink img-overlay">
                {statusCode
                  ? `Doszło do błędu ${statusCode} po stronie serwera`
                  : "Doszło do błędu po stronie klienta"}
              </h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

Error.getInitialProps = ({ reset, err }) => {
  const statusCode = reset ? reset.statusCode : err ? err.statusCode : 404;
  console.log(reset);
  return { statusCode, reset };
};

export default Error;
