"use client";

import { Col, Container, Row } from "react-bootstrap";
import Offer from "./components/offer/offer";

import collaborationBg from "public/images/Sample_image_dark.png";

export default function Page() {
  return (
    <Container fluid>
      <Row
        className="mb-4"
        style={{
          height: "95vh",
          backgroundImage: "url(" + collaborationBg.src + ")",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "42% 0%",
        }}
      >
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 6, offset: 6 }}
          lg={{ span: 6, offset: 5 }}
          xl={{ span: 6, offset: 4 }}
          style={{ height: "75%" }}
          className="text-light d-flex align-items-center justify-content-center"
        >
          <div className="text-center text-md-start img-overlay">
            <h1>
              Dołącz do&nbsp;organizacji
              <br />
              32. Finału WOŚP
            </h1>

            <p className="px-5 px-md-0">
              Chciałbyś wesprzeć organizację Finału oraz&nbsp;poznać nowe osoby?
              Przejrzyj naszą ofertę i&nbsp;wybierz w&nbsp;jaki&nbsp;sposób
              chciałbyś pomóc w&nbsp;przygotowaniach!
            </p>
            <h6>Więcej informacji poniżej!</h6>
          </div>
        </Col>
        <Col className="text-light d-flex flex-column align-items-center justify-content-center text-center"></Col>
        <Col
          xs={12}
          style={{ height: "25%" }}
          className="text-light d-flex align-items-center justify-content-center"
        >
          <i
            className={"animate-flicker" + " bi bi-arrow-down-short"}
            style={{ fontSize: 60, alignSelf: "baseline" }}
          ></i>
        </Col>
      </Row>

      <Row className="my-4">
        <Col className="d-flex flex-column align-items-center justify-content-center text-center">
          <h2>Kogo szukamy</h2>
          <span>
            Szukamy&nbsp;do&nbsp;naszego zespołu chętnych i&nbsp;zmobilizowanych
            do&nbsp;działania osób, które zaangażują się&nbsp;razem z&nbsp;nami
            w&nbsp;organizację Finału WOŚP w&nbsp;Białymstoku.
          </span>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <Offer></Offer>
        </Col>
      </Row>

      <Row className="my-4">
        <Col className="d-flex flex-column align-items-center justify-content-center text-center">
          <h1>Gorąco zapraszamy!</h1>
        </Col>
      </Row>
    </Container>
  );
}
