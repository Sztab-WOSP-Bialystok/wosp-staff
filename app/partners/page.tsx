"use client";

import { Card, Col, Container, Row } from "react-bootstrap";
import partnerData from "../../public/info/partners-data.json";
import PartnerGroup from "./components/partner-group";
import { CONTACT_KEYS } from "../consts/contact-keys.const";
import { ContactData } from "../contact/contact-card";
import { useState } from "react";
import contactData from "../../public/info/contact-data.json";
import HonoraryPatronageSection from "../home/sections/honorary-patronage/honorary-patronage-section";

export interface PartnerGroupData {
  groupName: string;
  partners: PartnerData[];
}

export interface PartnerData {
  name: string;
  link?: string;
  isVertical?: boolean;
  imagePath?: string;
}

export default function Page() {
  const partnerGroups: PartnerGroupData[] = partnerData;

  const [mailToBoss] = useState<ContactData>(
    contactData.find((s) => s.key === CONTACT_KEYS.BOSS)
  );

  const [mailBody] = useState(
    "body=Szanowni Państwo, piszę w sprawie partnerstwa w ramach 32. Finału WOŚP."
  );

  const [mailSubject] = useState("subject=Partner 32. Finału WOŚP");

  return (
    <Container className="mt-2 mt-sm-3 mt-xl-5">
      <Row className="mb-3">
        <Col className="text-center">
          <h1 className="img-overlay">Partnerzy wydarzenia</h1>
          <h4 className="img-overlay">Chcesz poznać oferty współpracy?</h4>
          <h6>
            <span className="img-overlay ">Napisz do nas: </span>
            <a
              href={
                "mailto:" + mailToBoss.mail + "?" + mailSubject + "&" + mailBody
              }
            >
              {mailToBoss.mail}
            </a>
          </h6>
        </Col>
      </Row>

      <Row>
        <Col className="mb-5">
          <Card>
            <Card.Body style={{ backgroundColor: "white" }}>
              <HonoraryPatronageSection />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-gap-2">
        {partnerGroups.map((group) => (
          <>
            <Col xs={12}>
              <h2 className="img-overlay text-center">{group.groupName}</h2>
            </Col>
            <Col xs={12}  className="mb-5">
              <Card>
                <Card.Body style={{ backgroundColor: "white" }}>
                  <PartnerGroup data={group}></PartnerGroup>
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </Container>
  );
}
