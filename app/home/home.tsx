"use client";

import holidaySectionBg from "public/images/cards/volounteers_bg_dark.jpg";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  WospInternalLink,
  wospInternalLinks,
} from "../components/footer/models/wospInternalLink";
import {
  Links,
  NavigationElement,
  navigations,
} from "../components/navbar/navigation";
import SupportSection from "./sections/support-section/support-section";
import HonoraryPatronageSection from "./sections/honorary-patriage/honorary-patronage-section";

export default function Home() {
  const router = useRouter();

  const [iWolonatariuszSource] = useState<WospInternalLink>(
    wospInternalLinks.find((s) => s.key === "iwolontariusz")
  );
  const [faqNavigation] = useState<NavigationElement>(
    navigations.find((n) => n.link == Links.FAQ)
  );
  const [newsNavigation] = useState<NavigationElement>(
    navigations.find((n) => n.link == Links.NEWS)
  );

  return (
    <Container fluid>
      <Row
        style={{
          height: "95vh",
          backgroundImage: "url(" + holidaySectionBg.src + ")",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "60% 70%",
        }}
      >
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 5, offset: 6 }}
          lg={{ span: 6, offset: 5 }}
          xl={{ span: 6, offset: 4 }}
          style={{ height: "75%" }}
          className="text-light d-flex align-items-center justify-content-center"
        >
          <div className="text-center text-md-start ">
            <h1 className="img-overlay">Dołącz do grona wolontariuszy!</h1>
            <p className="px-5 px-md-0 img-overlay">
              Wesprzyj realizację celu Finału dołączając do&nbsp;kwestujących
              wolontariuszy. Każda&nbsp;para&nbsp;rąk&nbsp;się&nbsp;przyda!
            </p>
            <h6 className="img-overlay">Kliknij po więcej informacji!</h6>
            <Button
              variant="primary"
              size="lg"
              onClick={() => router.push(iWolonatariuszSource.link)}
            >
              {iWolonatariuszSource.description}
            </Button>
          </div>
        </Col>
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

      <Row
        style={{
          backgroundColor: "white",
        }}
      >
        <HonoraryPatronageSection />
      </Row>

      <Row>
        <SupportSection />
      </Row>

      <Row
        className="py-4"
        style={{
          backgroundColor: "var(--bs-body-bg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 10, offset: 2 }}
          className="d-flex align-items-center justify-content-center justify-content-md-start"
        >
          <div className="text-center text-md-start">
            <h1>Masz pytanie?</h1>
            <Container fluid className="px-0">
              <Row className="align-items-center">
                <Col xs={12} sm={7} className="text-center">
                  <h6 className="my-0">Przejdź do sekcji</h6>
                </Col>
                <Col xs={12} sm={5} className="mt-1 mt-sm-0">
                  <Button onClick={() => router.push(faqNavigation.link)}>
                    {faqNavigation.name}
                  </Button>
                </Col>
              </Row>
            </Container>
            <p></p>
          </div>
        </Col>
      </Row>
      <Row
        style={{
          height: "100vh",
        }}
      >
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 7, offset: 4 }}
          lg={{ span: 6, offset: 4 }}
          className="text-light d-flex align-items-center justify-content-center "
        >
          <div className="text-center text-md-start">
            <h1 className="img-overlay">
              Gramy do końca świata
              <br />i jeden dzień dłużej
            </h1>
            <h6 className="img-overlay">
              Po więcej aktualności zajrzyjcie na nasz profil Facebook
            </h6>
            <Button
              variant="primary"
              size="lg"
              onClick={() => router.push(newsNavigation.link)}
            >
              <i className="bi bi-facebook"></i> WOŚP Białystok
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
