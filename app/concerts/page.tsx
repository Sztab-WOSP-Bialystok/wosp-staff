"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { Current } from "./concerts/current/current";

export default function Page() {
	return (
			<Container className="mt-2 mt-sm-3 mt-xl-5">
				<Row>
					<Col
						lg={{ span: 8, offset: 2 }}
						className="text-center img-overlay"
					>
						<h1>Koncerty</h1>
						<p className="px-5">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Omnis veritatis est quidem quo dignissimos
							nisi enim commodi ducimus cupiditate totam illo
							voluptatibus voluptatum quas id soluta impedit,
							ratione inventore esse.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xl={{ span: 8, offset: 2 }} className="my-3">
						<Current></Current>
					</Col>
				</Row>
			</Container>
	);
}
