"use client"; //TODO: Configure SSR
import { Card, Col, Container, Row } from "react-bootstrap";
import { Tabs } from "../components/Tabs";
import { faqTabs } from "./components/faqTabs";

export default function Page() {
  return (
    <Container className="mt-2 mt-sm-3 mt-xl-5">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Często zadawane pytania</Card.Title>
              <Tabs tabs={faqTabs} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
