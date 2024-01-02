"use client"; //TODO: Configure SSR
import { Card, Col, Container, Row } from "../bootstrap";
import { Tabs } from "../components/Tabs";
import { faqTabs } from "./components/faqTabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function Page() {
  return (
    <Container className="mt-2 mt-sm-3 mt-xl-5">
      <Row>
        <Col xl={{ span: 8, offset: 2 }} className="text-start img-overlay">
          <h1>Często zadawane pytania</h1>
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 8, offset: 2 }} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Tabs tabs={faqTabs} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
