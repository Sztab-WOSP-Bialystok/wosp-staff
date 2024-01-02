import { Card, CardBody, CardText, CardTitle } from "../../../bootstrap";
import { SectionCardData } from "./types/sectionTypes";

type Props = { data: SectionCardData };

export default function SectionCard({ data }: Props) {
  return (
    <Card className="justify-content-center card-navigate">
      <CardBody
        className="d-flex flex-column"
        style={{
          objectFit: "cover",
          height: 200,
        }}
      >
        <CardTitle>
          <h4>{data.title}</h4>
        </CardTitle>
        <CardText>{data.description}</CardText>
        <Card.Link className="mt-auto" href={data.link}>
          {data.buttonLabel}
          <i className="ms-2 bi bi-box-arrow-up-right"></i>
        </Card.Link>
      </CardBody>
    </Card>
  );
}
