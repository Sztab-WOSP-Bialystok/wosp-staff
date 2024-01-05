"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import contactData from "../../public/info/contact-data.json";
import {
  Links,
  NavigationElement,
  navigations,
} from "../components/navbar/navigation";
import { CONTACT_KEYS } from "../consts/contact-keys.const";
import { ContactData } from "../contact/contact-card";

type Props = { error: string; errorInfo: any };

export default function ErrorPage({ error, errorInfo }: Props) {
  const router = useRouter();

  const [homeNavigation] = useState<NavigationElement>(
    navigations.find((s) => s.link === Links.HOME)
  );

  const [mailToAdmin] = useState<ContactData>(
    contactData.find((s) => s.key === CONTACT_KEYS.ADMIN)
  );

  const handleClick = () => {
    router.push(homeNavigation.link);
  };

  const [mailBody] = useState(
    "body=Szanowni Państwo, piszę w sprawie błędu, który wystąpił podczas korzystania ze strony Białostockiego Sztabu WOŚP #6314."
  );

  const [mailSubject] = useState("subject=Błąd strony WWW");

  return (
    <Container className="mt-2 mt-sm-3 mt-xl-5" style={{ minHeight: "70vh" }}>{/* TODO: Remove minHeight after fixing sticky footer */}
      <Row className="img-overlay justify-content-center">
        <Col xs={12} xl={8} className="my-3 my-xl-5">
          <h2>Oops, wygląda&nbsp;na&nbsp;to, że&nbsp;doszło do&nbsp;błędu!</h2>
          <h6 className="my-3">
            W razie dalszego występowania błędu skontaktuj się&nbsp;z
            administratorem.
          </h6>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} xl={8}>
          <Button
            className="me-2 mb-2"
            variant="primary"
            type="button"
            onClick={handleClick}
          >
            Powrót na stronę główną
          </Button>
          <Button
            className="me-2 mb-2"
            variant="secondary"
            href={
              "mailto:" + mailToAdmin.mail + "?" + mailSubject + "&" + mailBody
            }
          >
            Wyślij informację
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
