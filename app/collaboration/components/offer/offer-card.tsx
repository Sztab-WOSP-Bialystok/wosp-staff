import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from "../../../bootstrap";

export interface OfferData {
  title: string;
  description: string;
  lightImgSrc: string;
  darkImgSrc: string;
  display: boolean;
}

type Props = { data: OfferData };

export default function OfferCard({ data }: Props) {
  return (
    <Card className="d-flex justify-content-center" style={{ height: "100%" }}>
      <CardImg
        fetchPriority="high"
        variant="top"
        src={data.lightImgSrc}
        style={{ objectFit: "cover", height: 150 }}
        className="d-none d-md-block"
      />
      <CardImg
        fetchPriority="high"
        variant="top"
        src={data.darkImgSrc}
        style={{ objectFit: "cover", height: 170 }}
        className="d-block d-md-none rounded-bottom"
      />
      <CardImgOverlay
        className={"d-block d-md-none text-light"}
      >
        <CardTitle className="img-overlay">{data.title}</CardTitle>
        <CardText className="img-overlay">{data.description}</CardText>
      </CardImgOverlay>
      <CardBody className="d-none d-md-block">
        <CardTitle>{data.title}</CardTitle>
        <CardText>{data.description}</CardText>
      </CardBody>
    </Card>
  );
}
