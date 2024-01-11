import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Links,
  NavigationElement,
  navigations,
} from "../../../components/navbar/navigation";
import { Button, Col, Container, Row } from "react-bootstrap";

import supportSectionBg from "public/images/section-bg/support.jpg";

export default function SupportSection() {
  const router = useRouter();

  const [supportNavigation] = useState<NavigationElement>(
    navigations.find((n) => n.link == Links.SUPPORT)
  );

  return (
    <Container fluid className="px-0">
      <Row>
        <Col
          xs={{ span: 12, offset: 0 }}
          sm={{ span: 12, offset: 0 }}
          md={{ span: 5, offset: 6 }}
          lg={{ span: 6, offset: 5 }}
          xl={{ span: 6, offset: 4 }}
          style={{ height: "75%" }}
          className="text-light d-flex align-items-center justify-content-center"
        >
          <div className="text-center text-md-start ">
            <h1 className="img-overlay">Wsparcie Finału</h1>
            <p className="px-5 px-md-0 img-overlay">
              Dowiedz się w jaki sposób możesz wspomóc osiągnąć cel 31. Finału
              WOŚP.
            </p>
            <h6 className="img-overlay">Kliknij po więcej informacji!</h6>
            <Button onClick={() => router.push(supportNavigation.link)}>
              {supportNavigation.name}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
