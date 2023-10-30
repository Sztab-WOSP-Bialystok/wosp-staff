import { Col, Container, Row } from "react-bootstrap";
import { socialMediaLinks } from "./models/socialMediaLink";
import { wospInternalLinks } from "./models/wospInternalLink";

const ContactFooter = () => {
  return (
    <footer className="py-1 py-lg-4  ">
      <Container>
        <Row>
          <Col sm={6} lg={4} className="pt-4 pt-lg-0">
            <h5>Więcej informacji</h5>
            {wospInternalLinks.map((wospInternalLink, index) => (
              <div key={index}>
                <span>
                  <a
                    href={wospInternalLink.link}
                    className="text-decoration-none"
                  >
                    {wospInternalLink.wospSiteDescription}
                  </a>
                </span>
              </div>
            ))}
          </Col>
          <Col sm={6} lg={4} className="pt-4 pt-lg-0">
            <h5>Social Media</h5>
            <div className="d-flex flex-row">
              {socialMediaLinks.map((socialMediaLink, index) => (
                <div key={index} className="fs-3 me-2">
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
