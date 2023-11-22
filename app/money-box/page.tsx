"use client";

import { Container, Row, Col } from "react-bootstrap";
import contactData from "../../public/info/contact-data.json";
import ContactCard, { ContactData } from "../contact/contact-card";
import Link from "next/link";

//TODO: Configure SSR

export default function Page() {
  const data: ContactData[] = contactData;
  const mainStaffContact = data.find((contact) => contact.key == "person2");
  const moneyBoxCoordinatorContact = data.find(
    (contact) => contact.key == "person1"
  );

  return (
    <Container className="my-3 my-xl-5">
      <Row>
        <Col xs={12}>
          <h3>
            Czy wiesz, że&nbsp;każda firma i&nbsp;instytucja może wspomóc
            zbiórkę WOŚP?
          </h3>
          <p>
            Można to&nbsp;zrobić poprzez Puszkę Stacjonarną, którą można mieć we
            własnym lokalu od 10 grudnia 2023 do&nbsp;dnia Finału w&nbsp;dniu 28
            stycznia 2024.
          </p>
        </Col>
        <Col xs={12} className="my-3 my-xl-5">
          <h5>Kto może ubiegać się o Puszkę Stacjonarną?</h5>
          <p>
            Każda firma i&nbsp;instytucja. Osoby prywatne nie mogą uzyskać
            Puszki Stacjonarnej.
          </p>
          <h5>Czym jest Firmowa Puszka Stacjonarna?</h5>
          <p>
            Firmowa Puszka Stacjonarna to tekturowa puszka kwestarska, która
            przypisana jest do konkretnego Opiekuna i&nbsp;lokalu. Sztab WOŚP
            prowadzi nadzór nad prowadzoną kwestą (wydaje niezbędne materiały
            oraz rozlicza zbiórkę). Zbiórka do Firmowych Puszek Stacjonarnych
            może odbywać się w dniach 10.12.2023 r. – 28.01.2024.
          </p>
          <h5>Jak mogę zarejestrować Puszkę Stacjonarną?</h5>
          <h6>
            <span>Przez portal: </span>
            <span>
              <Link href="https://iwolontariusz.wosp.org.pl/">
                iwolontariusz.wosp.org.pl
              </Link>
            </span>
          </h6>
          <p>
            Aby to zrobić należy: założyć i potwierdzić konto (jeśli nie było
            zakładane), następnie przejść na stronę rejestracji, wybrać opcję
            "CHCĘ REPREZENTOWAĆ FIRMĘ", wypełnić dane firmy, znaleźć sztab
            Białystok #6413, podać termin zbiórki oraz lokalizację swojej firmy,
            gdzie będzie znajdować się Puszka. Na tym etapie można dodać kolejną
            puszkę, oraz dodatkowo założyć eSkarbonkę. Na końcu następuje
            weryfikacja i akceptacja wniosku.
          </p>
          <h6>Przez papierowy formularz rejestracyjny.</h6>
          <p>
            <span>Aby go otrzymać należy napisać do nas na: </span>
            <a href={"mailto:" + mainStaffContact.mail}>
              {mainStaffContact.mail}{" "}
            </a>
            <span>
              lub skontaktować się z koordynatorem ds Puszek Stacjonarnych:
            </span>
          </p>
          <Container>
            <Row>
              <Col
                sm={{ span: 12 }}
                md={{ span: 8, offset: 2 }}
                lg={{ span: 6, offset: 3 }}
              >
                <ContactCard data={moneyBoxCoordinatorContact} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
