"use client";

import { Col, Container, Row } from "react-bootstrap";
import ContactCard, { ContactData } from "./contact-card";
import contactData from "public/info/contact-data.json";

export default function Page() {
  const data: ContactData[] = contactData;

  return (
    <Container>
      <Row>
        {data.map((data) => (
          <Col xs={12} sm={12} md={6} lg={4} className="mb-4">
            <ContactCard data={data}></ContactCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
