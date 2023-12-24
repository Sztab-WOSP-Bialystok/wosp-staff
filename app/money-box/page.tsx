"use client";

import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import contactData from "../../public/info/contact-data.json";
import ContactCard, { ContactData } from "../contact/contact-card";
import Link from "next/link";
import { CONTACT_KEYS } from "../consts/contact-keys.const";
import spiral from "public/images/41A_S_32FinalWOSP2024_grafika_fragment_podglad.png";

//TODO: Configure SSR

export default function Page() {
  const data: ContactData[] = contactData;
  const mainStaffContact = data.find(
    (contact) => contact.key == CONTACT_KEYS.BOSS
  );
  const moneyBoxCoordinatorContact = data.find(
    (contact) => contact.key == CONTACT_KEYS.MONEY_BOX
  );

  return (
    <Container className="my-3 my-xl-5">
      <Row>
        <Col lg={{ span: 8, offset: 2 }} className="text-center img-overlay">
          <h3>
            Czy wiesz, że&nbsp;każda firma i&nbsp;instytucja może wspomóc
            zbiórkę WOŚP?
          </h3>
          <p className="px-5">
            Można to&nbsp;zrobić poprzez Puszkę Stacjonarną, którą można mieć we
            własnym lokalu od 10 grudnia 2023 do&nbsp;dnia Finału w&nbsp;dniu
            28&nbsp;stycznia&nbsp;2024.
          </p>
        </Col>
        <Col xl={{ span: 8, offset: 2 }} className="my-3 my-xl-5">
          <Accordion defaultActiveKey={["0"]}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Czym jest Firmowa Puszka Stacjonarna?
              </Accordion.Header>
              <Accordion.Body>
                Firmowa Puszka Stacjonarna to tekturowa puszka kwestarska, która
                przypisana jest do konkretnego Opiekuna i&nbsp;lokalu. Sztab
                WOŚP prowadzi nadzór nad prowadzoną kwestą (wydaje niezbędne
                materiały oraz rozlicza zbiórkę). Zbiórka do Firmowych Puszek
                Stacjonarnych może odbywać się w dniach 10.12.2023 r. –
                28.01.2024.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Kto może ubiegać się o Puszkę Stacjonarną?
              </Accordion.Header>
              <Accordion.Body>
                Każda firma i&nbsp;instytucja. Osoby prywatne nie mogą uzyskać
                Puszki Stacjonarnej.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Jak mogę zarejestrować Puszkę Stacjonarną?
              </Accordion.Header>
              <Accordion.Body>
                <div>
                  <h6>
                    <span>Przez portal: </span>
                    <span>
                      <Link href="https://iwolontariusz.wosp.org.pl/">
                        iwolontariusz.wosp.org.pl
                      </Link>
                    </span>
                  </h6>
                  <span>
                    Aby to zrobić należy: założyć i potwierdzić konto (jeśli nie
                    było zakładane), następnie przejść na stronę rejestracji,
                    wybrać opcję "CHCĘ REPREZENTOWAĆ FIRMĘ", wypełnić dane
                    firmy, znaleźć sztab Białystok #6413, podać termin zbiórki
                    oraz lokalizację swojej firmy, gdzie będzie znajdować się
                    Puszka. Na tym etapie można dodać kolejną puszkę, oraz
                    dodatkowo założyć eSkarbonkę. Na końcu następuje weryfikacja
                    i akceptacja wniosku.
                  </span>
                </div>
                <div className="mt-4">
                  <h6>Przez papierowy formularz rejestracyjny.</h6>
                  <span>Aby go otrzymać należy napisać do nas na: </span>
                  <a href={"mailto:" + mainStaffContact.mail}>
                    {mainStaffContact.mail}
                  </a>
                  <span>
                    {" "}
                    lub skontaktować się z koordynatorem ds Puszek
                    Stacjonarnych:
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Container>
            <Row>
              <Col
                sm={{ span: 12 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 6, offset: 3 }}
                style={{ marginTop: "8rem" }}
              >
                <h3 className="text-center mb-4 img-overlay">Potrzebujesz więcej informacji?</h3>
                <div className="position-relative">
                  <img
                    src={spiral.src}
                    width={400}
                    style={{
                      position: "absolute",
                      top: "-200px",
                      left: "-170px",
                      zIndex: "-1",
                    }}
                  ></img>
                  <ContactCard data={moneyBoxCoordinatorContact} />
                </div>
              </Col>
            </Row>
            <Row className="py-4">
              <Col xs={12}>
                <Card>
                  <iframe
                    src="https://www.google.com/maps/d/embed?mid=1vsYTtnXNWzXTDJLG15aW68fE78MznZw&ehbc=2E312F"
                    width="100%"
                    height="480"
                  ></iframe>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
