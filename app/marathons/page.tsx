"use client";

import { Container, Row, Col, Button, Card, Accordion } from "react-bootstrap";
import externalSource from "../../public/info/external-sources.json";
import { EXTERNAL_SOURCE_KEYS } from "../consts/external-source-keys.const";

export default function Page() {
	const data = externalSource;
	const marathonExternal = data.find(
		(external) => external.key == EXTERNAL_SOURCE_KEYS.MARATHON_FORM
	);
	return (
		<Container className="m-2 mt-sm-3 m-xl-5">
			<Col xl={{ span: 8, offset: 2 }} className="my-3 img-overlay">
				<h1 className="text-center">Maraton</h1>
				<p className="px-5 px-md-0">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Natus in numquam quis omnis est ipsa. Non fugiat inventore
					incidunt quia aliquam labore tenetur dolorum culpa quos,
					eius nostrum voluptate omnis.
				</p>
			</Col>

			<Col xl={{ span: 8, offset: 2 }} className="my-3 my-xl-5">
				<Accordion defaultActiveKey={["0"]}>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Dlaczego biegniemy?</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Unde vel minima quos iste, libero vero iure
							omnis magnam sapiente dolor modi facilis nesciunt
							reiciendis labore eos. Provident, inventore porro!
							Ipsam.
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="1">
						<Accordion.Header>Regulamin</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Saepe fugit placeat esse asperiores, dolore
							atque odio cupiditate aliquam ut omnis nam accusamus
							suscipit recusandae minima at ea molestias
							distinctio! Reiciendis.
						</Accordion.Body>
					</Accordion.Item>

					<Accordion.Item eventKey="2">
						<Accordion.Header>Instrukcja biegania</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Totam optio ullam sit cum rerum, aut ex eos
							natus alias eveniet pariatur magni neque perferendis
							aperiam non voluptatum officia reprehenderit
							reiciendis.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Col>

			<Row>
				<Col xl={{ span: 8, offset: 2 }} className="my-3">
					<Card>
						<Card.Body>
							<div className="text-center text-md-start">
								<h1 className="info">
									Nie czekaj, zarejestruj się i biegnij z
									nami!
								</h1>
								<h6>
									Wejdź w formularz i wypełnij (UWAGA:
									przekierowanie do innej strony):
								</h6>
								<Button href={marathonExternal.url} className="button-radioactive">
									Zapisz się!
								</Button>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
