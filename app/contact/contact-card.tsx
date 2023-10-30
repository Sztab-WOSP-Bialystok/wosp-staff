import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export interface ContactData {
  name: string;
  surname: string;
  title: string;
  phone?: string;
  mail?: string;
  imagePath?: string;
}

type Props = { data: ContactData };

export default function ContactCard({ data }: Props) {
  return (
    <Card className="justify-content-center mt-2 mt-sm-3 mt-xl-5">
      <Card.Body style={{ height: 100 }}>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.surname} {data.name}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {data.mail ? (
          <ListGroup.Item>
            <i className="bi bi-envelope me-1"></i>
            <a href={"mailto:" + data.mail}>{data.mail}</a>
          </ListGroup.Item>
        ) : (
          <></>
        )}
        {data.phone ? (
          <ListGroup.Item>
            <i className="bi bi-telephone-fill me-1"></i>
            <a href={"tel:" + data.phone}>{data.phone}</a>
          </ListGroup.Item>
        ) : (
          <></>
        )}
      </ListGroup>
    </Card>
  );
}
