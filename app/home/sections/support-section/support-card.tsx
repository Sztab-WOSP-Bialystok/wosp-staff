import { Card } from "react-bootstrap";

export interface SupportTypeData {
  title: string;
  description: string;
  lightImgSrc: string;
  darkImgSrc: string;
  display: boolean;
  link: string;
}

type Props = { data: SupportTypeData };

export default function OfferCard({ data }: Props) {
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
      <Card.ImgOverlay
        className={"d-block d-md-none text-light"}
      >
        <Card.Title className="img-overlay">{data.title}</Card.Title>
        <Card.Text className="img-overlay">{data.description}</Card.Text>
      </Card.ImgOverlay>
      <Card.Body className="d-none d-md-block">
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
