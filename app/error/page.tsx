"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

type Props = { error: string; errorInfo: any };

export default function ErrorPage({ error, errorInfo }: Props) {
  const router = useRouter();
  const handleClick = () => {
    console.log(errorInfo);
    router.refresh();
  };

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
            <Card.Body>
              <Card.Title>
                <h2>Oops, wygląda na to, że doszło do błędu!</h2>
              </Card.Title>
              <h4 className="my-3">
                W razie dalszego występowania skontaktuj się z administratorem.
              </h4>
              <h5 className="my-3 theme-pink img-overlay">
                {error && error.toString()}
              </h5>
              <div className="d-flex justify-content-center">
                <Button
                  variant="secondary"
                  size="lg"
                  type="button"
                  onClick={handleClick}
                >
                  Odśwież
                </Button>
              </div>
              <p className="my-3 img-overlay">
                {errorInfo && errorInfo.componentStack?.toString()}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
