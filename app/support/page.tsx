'use client'

import supportSectionData from "../../public/info/support-section-data.json";
import spiral from "../../public/images/40A_S_32FinalWOSP2024_grafika_fragment_podglad.png";
import { Container, Row, Col } from "react-bootstrap";
import { SectionCardData } from "../home/sections/types/sectionTypes";
import SectionCard from "../home/sections/section-card";

export default function Page() {
  const data: SectionCardData[] = supportSectionData;

  return data.filter((x) => x.display).length > 0 ? (
    <Container fluid>
      <Row>
        <Col
          className="d-flex justify-content-center img-overlay position-relative mb-4 mb-lg-5"
          style={{ marginTop: "12rem" }}
        >
          <h1>Wsparcie Finału</h1>
          <img
            src={spiral.src}
            style={{
              width: "100%",
              maxWidth: "600px",
              position: "absolute",
              top: "-180px",
              zIndex: "-1",
            }}
          ></img>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center px-md-5">
        {data
          .filter((offer) => offer.display)
          .map((offer) => (
            <Col key={offer.title} xs={12} md={6} className="mb-4">
              <SectionCard data={offer}/>
            </Col>
          ))}
      </Row>
    </Container>
  ) : (
    <></>
  );
}
