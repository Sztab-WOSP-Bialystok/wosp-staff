"use client";

import { Col, Container, Row } from "../../../bootstrap";
import OfferCard, { OfferData } from "./offer-card";
import offerCardData from "./offer-data.json";

export default function Offer() {
  const data: OfferData[] = offerCardData;

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-center my-3">
          <h2 className="img-overlay">Nasza oferta</h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {data.filter(offer => offer.display).map((offer) => (
          <Col key={offer.title} xs={12} md={6} lg={4} className="mb-4">
            <OfferCard data={offer}></OfferCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
