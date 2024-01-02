"use client";

import { Container, Row, Col, Card } from "react-bootstrap";

export default function Page() {
	return (
		<Row>
			<Container className="mt-2 mt-sm-3 mt-xl-5">
				<Row>
					<Col
						xl={{ span: 8, offset: 2 }}
						className="text-start img-overlay"
					>
						<h1>Koncerty</h1>
					</Col>
				</Row>
				<Row>
					<Col xl={{ span: 8, offset: 2 }} className="my-3">
						<Card>
							<Card.Body>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Commodi debitis quas aperiam
								rem earum aliquid atque nobis enim dignissimos
								vero sunt nesciunt vel, quod ex molestias totam
								iusto possimus impedit. 
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</Row>
	);
}
