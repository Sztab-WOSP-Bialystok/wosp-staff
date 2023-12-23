"use client";
import { useRouter } from 'next/navigation';
import caveBg from "public/images/cave.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Links, navigations } from "./components/navbar/navigation";

export default function NotFound() {
  const router = useRouter();
  const homeNavigation = navigations.find((n) => n.link == Links.HOME);
  return (
    <Container fluid>
      <Row
        style={{
          height: "95vh",
          backgroundImage: `url(${caveBg.src})`,
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "50% 0%",
        }}
      >
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          xl={{ span: 6, offset: 4 }}
          style={{ height: "75%" }}
          className="text-light d-flex align-items-center justify-content-center"
        >
          <div className="text-center text-md-start">
            <h1 className="info">Ups... Chyba zabłądziłeś</h1>
            <h6>Kliknij kafelek by wrócić na powierzchnię!</h6>
            <Button
              className="button-radioactive"
              onClick={() => router.push(homeNavigation.link)}
            >
              {homeNavigation.name}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
