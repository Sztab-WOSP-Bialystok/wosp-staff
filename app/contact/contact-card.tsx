import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "../bootstrap";

export interface ContactData {
  key: string;
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
    <Card className="justify-content-center">
      <CardBody style={{ height: 100 }}>
        <CardTitle>{data.title}</CardTitle>
        <CardText>
          {data.surname} {data.name}
        </CardText>
      </CardBody>
      <ListGroup className="list-group-flush">
        {data.mail ? (
          <ListGroupItem>
            <i className="bi bi-envelope me-1"></i>
            <a href={"mailto:" + data.mail}>{data.mail}</a>
          </ListGroupItem>
        ) : (
          <></>
        )}
        {data.phone ? (
          <ListGroupItem>
            <i className="bi bi-telephone-fill me-1"></i>
            <a href={"tel:" + data.phone}>{data.phone}</a>
          </ListGroupItem>
        ) : (
          <></>
        )}
      </ListGroup>
    </Card>
  );
}
