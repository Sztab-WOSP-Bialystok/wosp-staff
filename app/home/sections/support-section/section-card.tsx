import { Button, Card, Nav } from "react-bootstrap";
import Link from "next/link";

export interface SectionCardData {
  title: string;
  description: string;
  lightImgSrc: string;
  darkImgSrc: string;
  display: boolean;
  link: string;
  buttonLabel: string;
}

type Props = { data: SectionCardData };

export default function SectionCard({ data }: Props) {
  return (
    <Card className="d-flex justify-content-center" style={{ height: "100%" }}>
      <Card.Img
        fetchPriority="high"
        variant="top"
        src={data.lightImgSrc}
        style={{ objectFit: "cover", height: 150 }}
        className="d-none d-md-block"
      />
      <Card.Img
        fetchPriority="high"
        variant="top"
        src={data.darkImgSrc}
        style={{ objectFit: "cover", height: 170 }}
        className="d-block d-md-none rounded-bottom"
      />
      <Nav.Link as={Link} href={data.link} disabled={false}>
        <Card.ImgOverlay className={"d-block d-md-none text-light"}>
          <Card.Title className="img-overlay">
            <h1>{data.title}</h1>
          </Card.Title>
          <Card.Text className="img-overlay">{data.description}</Card.Text>
        </Card.ImgOverlay>
      </Nav.Link>
      <Card.Body className="d-none d-md-block">
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Button variant="primary" className="button" href={data.link}>
          {data.buttonLabel}
        </Button>
      </Card.Body>
    </Card>
  );
}
