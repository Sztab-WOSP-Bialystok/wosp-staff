import ContactCard, { ContactData } from "./contact-card";
import contactData from "../../public/info/contact-data.json";
import { Metadata } from "next";
import { Card, CardBody, CardTitle, Col, Container, Row } from "../bootstrap";

export const metadata: Metadata = {
  title: 'Kontakt',
}

export default function Page() {
  const data: ContactData[] = contactData;

  return (
    <Container className="mt-2 mt-sm-3 mt-xl-5">
      <Row>
        <Col className="text-start img-overlay">
          <h1>Kontakt</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} xl={8} className="my-3 my-xl-5">
          <Card>
            <CardBody>
              <CardTitle>
                <h2>Godziny otwarcia siedziby Sztabu</h2>
              </CardTitle>
              <h3 className="my-3">Środa i piątek 17:00-20:00</h3>
              <h4 className="my-3">ul. Warszawska 50 lok. 206, Białystok</h4>
              <h5 className="my-3 theme-pink img-overlay">
                UWAGA! W celu umówienia&nbsp;się&nbsp;na spotkanie bądź
                dostarczenia przedmiotu&nbsp;na aukcje&nbsp;poza podanymi
                godzinami prosimy&nbsp;o wcześniejszy kontakt
                telefoniczny&nbsp;z odpowiednim koordynatorem
              </h5>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3 text-start img-overlay">
          <h1>Zarząd Sztabu</h1>
        </Col>
      </Row>
      <Row>
        {data.map((data) => (
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={4}
            className="mb-4 mt-2 mt-sm-3 mt-xl-5"
          >
            <ContactCard data={data}></ContactCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
