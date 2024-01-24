"use client";
import { Container, Col } from "react-bootstrap";
import concertsPoster from "../../public/images/Concerts.jpg";

export default function Page() {
	return (
		
		<Container className="my-3 my-xl-5">
			<Col
				md={{ span: 8, offset: 2 }}
				className="img-overlay"
			>
				<h1 className="mb-4">Koncerty</h1>
			</Col>
			<Col
				md={{ span: 8, offset: 2 }}
				lg={{ span: 6, offset: 3 }}
				xl={{ span: 4, offset: 4 }}
				className="text-center img-overlay"
			>
				<img src={concertsPoster.src} width={"100%"} style={{objectFit: "contain"}} />
			</Col>
		</Container>
	);
}
