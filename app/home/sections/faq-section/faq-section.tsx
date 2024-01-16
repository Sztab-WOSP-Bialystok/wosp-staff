import router from "next/router";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  NavigationElement,
  navigations,
  Links,
} from "../../../components/navbar/navigation";

export default function FaqSection() {
  const [faqNavigation] = useState<NavigationElement>(
    navigations.find((n) => n.link == Links.FAQ)
  );

  return (
    <Container>
      <Row>
        <Col
          md={{ span: 10, offset: 1 }}
          className="d-flex align-items-center justify-content-center justify-content-md-start"
        >
          <Container fluid className="px-0 text-center text-md-start">
            <Row>
              <Col>
                <h1>Masz pytanie?</h1>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={12} md={3} xl={2}>
                <h6 className="my-0">Przejdź do sekcji</h6>
              </Col>
              <Col xs={12} md={9} xl={10} className="mt-1 mt-sm-0">
                <Button onClick={() => router.push(faqNavigation.link)}>
                  {faqNavigation.name}
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
