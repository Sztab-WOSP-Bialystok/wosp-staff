"use client";

import { Col, Container, Row } from "react-bootstrap";
import ContactCard, { ContactData } from "./contact-card";
import contactData from "public/info/contact-data.json";

export default function Page() {
  const data: ContactData[] = contactData;

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="my-3">Godziny otwarcia siedziby Sztabu</h1>
          <h3 className="my-3">Środa i piątek 17:00-20:00</h3>
          <h4 className="my-3">ul. Warszawska 50 lok. 206, Białystok</h4>
          <h5 className="my-3 theme-pink">
            UWAGA! W celu umówienia&nbsp;się&nbsp;na spotkanie bądź dostarczenia przedmiotu&nbsp;na
            aukcje&nbsp;poza podanymi godzinami prosimy&nbsp;o wcześniejszy kontakt
            telefoniczny&nbsp;z odpowiednim koordynatorem
          </h5>
        </Col>
      </Row>
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
