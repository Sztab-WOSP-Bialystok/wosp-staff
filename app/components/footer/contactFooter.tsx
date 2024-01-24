import { Col, Container, Row } from "react-bootstrap";
import { socialMediaLinks } from "./models/socialMediaLink";
import { wospInternalLinks } from "./models/wospInternalLink";
import { useState } from "react";
import { NavigationElement, navigations, Links } from "../navbar/navigation";
import { EXTERNAL_SOURCE_KEYS } from "../../consts/external-source-keys.const";
import { ExteralSource } from "../../faq/components/volounteerTabHeader";
import externalSources from "../../../public/info/external-sources.json";

const ContactFooter = () => {
  const [contactNavigation] = useState<NavigationElement>(
    navigations.find((n) => n.link == Links.CONTACT)
  );

  const [eSkarbonka] = useState<ExteralSource>(
    externalSources.find((n) => n.key == EXTERNAL_SOURCE_KEYS.ESKARBONKA)
  );

  return (
    <footer className="py-1 py-lg-4  ">
      <Container>
        <Row>
          <Col sm={6} lg={4} className="pt-4 pt-lg-0">
            <h5>wosp.bialystok.pl</h5>
            <div key={contactNavigation.link}>
              <a href={contactNavigation.link} className="text-decoration-none">
                {contactNavigation.name}
              </a>
            </div>
            <div key={eSkarbonka.key}>
              <a href={eSkarbonka.url} className="text-decoration-none">
                {eSkarbonka.title}
              </a>
            </div>
          </Col>
          <Col sm={6} lg={4} className="pt-4 pt-lg-0">
            <h5>Więcej informacji</h5>
            {wospInternalLinks.map((wospInternalLink, index) => (
              <div key={index}>
                <span>
                  <a
                    href={wospInternalLink.link}
                    className="text-decoration-none"
                  >
                    {wospInternalLink.description}
                  </a>
                </span>
              </div>
            ))}
          </Col>
          <Col sm={6} lg={4} className="pt-4 pt-lg-0">
            <h5>Social Media</h5>
            <div className="d-flex flex-row">
              {socialMediaLinks.map((socialMediaLink, index) => (
                <div key={index} className="fs-1 me-2">
                  <a
                    href={socialMediaLink.link}
                    className="text-decoration-none "
                  >
                    {socialMediaLink.icon}
                  </a>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default ContactFooter;
