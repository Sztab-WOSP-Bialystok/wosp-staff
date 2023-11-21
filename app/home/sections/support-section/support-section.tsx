import supportSectionData from "public/info/support-section-data.json";
import { Col, Container, Row } from "react-bootstrap";
import SupportCard from "./section-card";
import { SectionCardData } from "./types/sectionTypes";

export default function SupportSection() {
  const data: SectionCardData[] = supportSectionData;

  return data.filter((x) => x.display).length > 0 ? (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-center my-5">
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
  ) : (
    <></>
  );
}
