import Link from "next/link";
import logo from "./../../../../public/images/herb_honorowy_patronat.jpg";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import externalSources from "./../../../../public/info/external-sources.json";
import { EXTERNAL_SOURCE_KEYS } from "../../../consts/external-source-keys.const";
import { ExteralSource } from "../../../faq/components/volounteerTabHeader";

export default function HonoraryPatronageSection() {
  const [bialystokWeb] = useState<ExteralSource>(
    externalSources.find((n) => n.key == EXTERNAL_SOURCE_KEYS.BIALYSTOK_WEB)
  );

  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col
          className="mt-2 mt-md-0 pe-sm-2"
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 4, offset: 1 }}
          md={{ span: 4, offset: 2 }}
          lg={{ span: 3, offset: 2 }}
          xl={{ span: 2, offset: 3 }}
        >
          <img src={logo.src} width={"100%"} style={{ maxHeight: "50%" }} />
        </Col>
        <Col
          sm={{ span: 5, offset: 0 }}
          className="text-center text-sm-start mb-5 mb-sm-0 px-0"
        >
          <div className="text-dark mb-3 px-5 px-sm-0">
            <h1 className="mb-md-4">Wydarzenie szczególnej&nbsp;rangi</h1>
            <span>
              Tegoroczny Finał został objęty honorowym patronatem Prezydenta
              Miasta&nbsp;Białegostoku.
            </span>
            <p className="mt-1" style={{fontWeight:"bold", fontStyle: "italic"}}>
              Dziękujemy!
            </p>
          </div>
          <Link href={bialystokWeb.url}>
            {bialystokWeb.title}
            <i className="ms-2 bi bi-box-arrow-up-right"></i>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
