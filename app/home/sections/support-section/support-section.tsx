import { Container, Row, Col, CardGroup } from "react-bootstrap";
import SupportCard, { SectionCardData } from "./section-card";
import supportSectionData from "public/info/support-section-data.json";

export default function SupportSection() {
  const data: SectionCardData[] = supportSectionData; //TODO: Add data from .json file

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-center my-3">
          <h2>Wsparcie Finału</h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <div className="d-block d-md-none rounded-bottom">
          {data
            .filter((offer) => offer.display)
            .map((offer) => (
              <Col key={offer.title} xs={12} md={6} lg={4} className="mb-4">
                <SupportCard data={offer}></SupportCard>
              </Col>
            ))}
        </div>
        <Col className="d-none d-md-block">
          <CardGroup>
            {data
              .filter((offer) => offer.display)
              .map((offer) => (
                <SupportCard data={offer}></SupportCard>
              ))}
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}
