"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";
import {
	Links,
	NavigationElement,
	navigations,
} from "../components/navbar/navigation";
import imgtest from "../../public/images/cards/dev_bg_dark.jpg";

export default function Page() {
	const [contactNavigation] = useState<NavigationElement>(
		navigations.find((n) => n.link == Links.CONTACT)
	);

	return (
		<Container className="my-3 my-xl-5">
			<Row>
				<Col xl={{ span: 8, offset: 2 }} className="my-2 img-overlay">
					<h1 className="text-center">Dla mediów</h1>
					<div className="text-center px-5 px-md-0">
						W sprawie informacji dotyczących funkcjonowania Sztabu
						#6314 prosimy o kontakt z &nbsp;
						<a href={contactNavigation.link}>Szefem Sztabu</a>
					</div>
				</Col>
				<Col xl={{ span: 8, offset: 2 }} className="my-2 img-overlay">
					<Card>
						<img src={imgtest.src}></img>
					</Card>
				</Col>
				<Col xl={{ span: 8, offset: 2 }} className="my-2 img-overlay">
					<h3 className="text-center">Wejście dla mediów</h3>
					<div className="text-center px-5 px-md-0">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Aliquid quas quod beatae aut est natus totam
						dolor. Praesentium, voluptates modi libero nostrum qui
						molestiae et eius temporibus ipsa minima eveniet.
					</div>
                </Col>
                <Col xl={{ span: 8, offset: 2 }} className="my-2 img-overlay">
					<Card>
						<Card.Body>
							<h4>Prasa</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Nemo fugiat quis magnam
								perferendis, earum aliquid? Quibusdam enim iure
								eveniet vero aut necessitatibus culpa! Nesciunt
								placeat sit asperiores quidem, animi
								dignissimos.
							</p>
							<h4>tresc1</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Error inventore minus, quidem
								blanditiis nisi quis, perspiciatis autem
								expedita quia repudiandae odio dolorum?
								Necessitatibus adipisci ex vel ad consequatur!
								Esse, laborum?
							</p>
							<h4>tresc2</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. In mollitia suscipit amet
								voluptatem fugiat. Molestiae eveniet, libero eos
								qui ipsum in quibusdam incidunt nesciunt vero
								enim accusantium maiores voluptatum aut
							</p>
						</Card.Body> 
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
