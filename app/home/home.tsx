"use client";

import holidaySectionBg from "public/images/Sample_image_dark.png";
import newsSectionBg from "public/images/Sample_image_light.png";

import { Button, Col, Container, Row } from "react-bootstrap";
import { Links, navigations } from "../components/navbar/navigation";
import SupportSection from "./sections/support-section/support-section";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const faqNavigation = navigations.find((n) => n.link == Links.FAQ);
  const newsNavigation = navigations.find((n) => n.link == Links.NEWS);
  const collaborationNavigation = navigations.find(
    (n) => n.link == Links.COLLABORATION
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
          backgroundPosition: "0% 70%",
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
            <h1 className="img-overlay">Dołącz do grona sztabowiczów!</h1>
            <p className="px-5 px-md-0 img-overlay">
              Kończymy urlopy i&nbsp;zabieramy się&nbsp;do&nbsp;pracy.
              Każda&nbsp;para&nbsp;rąk&nbsp;się&nbsp;przyda!
            </p>
            <h6 className="img-overlay">Kliknij po więcej informacji!</h6>
            <Button
              variant="primary"
              size="lg"
              onClick={() => router.push(collaborationNavigation.link)}
            >
              {collaborationNavigation.name}
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

      <Row>
        <SupportSection />
      </Row>

      <Row
        className="py-4"
        style={{
          backgroundColor: "white",
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
                <Col xs={12} sm={7} className="text-align-center">
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
          backgroundImage: "url(" + newsSectionBg.src + ")",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          transitionDelay: "1000",
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
