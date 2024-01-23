"use client";

import holidaySectionBg from "public/images/cards/volounteers_bg_dark.jpg";
import partnersSectionBg from "public/images/Sticker.webp";

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
import HonoraryPatronageSection from "./sections/honorary-patronage/honorary-patronage-section";
import FaqSection from "./sections/faq-section/faq-section";
import PartnersCarousel from "./components/partners-carousel";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const [iWolonatariuszSource] = useState<WospInternalLink>(
    wospInternalLinks.find((s) => s.key === "iwolontariusz")
  );

  const [newsNavigation] = useState<NavigationElement>(
    navigations.find((n) => n.link == Links.NEWS)
  );

  const [partnersNavigation] = useState<NavigationElement>(
    navigations.find((n) => n.link == Links.PARTNERS)
  );

  return (
    <Container fluid>
      <Row
        className="pb-4 pt-3"
        style={{ backgroundColor: "white", minHeight: "10rem" }}
      >
        <Col xxl={{ span: 10, offset: 1 }} className="text-center">
          <img
            src={partnersSectionBg.src}
            width={"90%"}
            style={{ maxHeight: "25rem", objectFit: "contain" }}
          ></img>
          <div className="text-dark my-4">
            <h1 style={{ wordBreak: "normal" }}>Partnerzy 32. Finału!</h1>
            <h6>To dzięki nim Finał w Białymstoku jest możliwy!</h6>
          </div>
          <PartnersCarousel />
          <div className="mt-4">
            <Link href={partnersNavigation.link}>
              Poznaj wszystkich Partnerów
              <i className="ms-2 bi bi-box-arrow-up-right"></i>
            </Link>
          </div>
        </Col>
      </Row>

      <Row
        className="pb-5 pt-4"
        style={{
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
          className="text-light d-flex align-items-center justify-content-center"
        >
          <div className="text-center text-md-start ">
            <h1 className="img-overlay">Dołącz do grona wolontariuszy!</h1>
            <p className="px-5 px-md-0 img-overlay">
              Wesprzyj realizację celu Finału dołączając do kwestujących
              wolontariuszy. Każda para rąk się przyda!
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
      </Row>

      <Row
        className="pb-5 pt-4"
        style={{
          backgroundColor: "white",
        }}
      >
        <Col>
          <HonoraryPatronageSection />
        </Col>
      </Row>

      <Row className="pb-5 pt-4">
        <Col>
          <SupportSection />
        </Col>
      </Row>

      <Row
        className="pb-5 pt-4"
        style={{
          backgroundColor: "var(--bs-body-bg)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <Col>
          <FaqSection />
        </Col>
      </Row>

      <Row className="pb-5 pt-4">
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
              onClick={()=> router.push(newsNavigation.link)}
            >
              <i className="bi bi-facebook"></i> WOŚP Białystok
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
