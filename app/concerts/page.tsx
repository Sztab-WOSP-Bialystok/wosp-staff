"use client";
import { Container, Row, Col, Card } from "react-bootstrap";
import concertsPoster from "../../public/images/ConcertsPoster.jpg";

export default function Page() {
	return (
		<Container className="my-3 my-xl-5">
			<Col
				md={{ span: 8, offset: 2 }}
				className="text-center img-overlay"
			>
				<h1 className="mb-4">Koncerty</h1>
			</Col>
			<Col
				lg={{ span: 8, offset: 2 }}
				className="text-center img-overlay"
			>
				<img src={concertsPoster.src} width={"100%"} />
			</Col>
		</Container>
	);
}
