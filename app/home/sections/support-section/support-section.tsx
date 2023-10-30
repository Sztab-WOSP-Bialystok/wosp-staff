import { Container, Row, Col } from "react-bootstrap";
import SupportCard, { SupportTypeData } from "./support-card";

export default function SupportSection() {
  const data: SupportTypeData[] = []; //TODO: Add data from .json file

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-center my-3">
          <h2>Wsparcie Finału</h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {data
          .filter((offer) => offer.display)
          .map((offer) => (
            <Col key={offer.title} xs={12} md={6} lg={4} className="mb-4">
              <SupportCard data={offer}></SupportCard>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
