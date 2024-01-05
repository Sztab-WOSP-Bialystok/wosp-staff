"use client";

import { Col, Container, Row } from "react-bootstrap";
import OfferCard, {
	OfferData,
} from "../../../collaboration/components/offer/offer-card";
import currentData from "./current-data.json";

export const Current = () => {
	const data: OfferData[] = currentData;

	return (
		<Container fluid>
			<Row>
				<Col className="d-flex justify-content-center my-3">
					<h2 className="img-overlay">Planowane koncerty</h2>
				</Col>
			</Row>
			<Row className="d-flex justify-content-center">
				{data
					.filter((current) => current.display)
					.map((current) => (
						<Col
							key={current.title}
							xs={12}
							md={6}
							lg={4}
							className="mb-4"
						>
							<OfferCard data={current}></OfferCard>
						</Col>
					))}
			</Row>
		</Container>
	);
};
