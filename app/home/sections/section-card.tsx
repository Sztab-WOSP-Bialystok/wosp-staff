import { Card } from "react-bootstrap";
import { SectionCardData } from "./types/sectionTypes";

type Props = { data: SectionCardData };

export default function SectionCard({ data }: Props) {
  return (
    <Card className="justify-content-center card-navigate">
      <Card.Body
        className="d-flex flex-column"
        style={{
          objectFit: "cover",
          height: 200,
        }}
      >
        <Card.Title>
          <h4>{data.title}</h4>
        </Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Link className="mt-auto" href={data.link}>
          {data.buttonLabel}
          <i className="ms-2 bi bi-box-arrow-up-right"></i>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
