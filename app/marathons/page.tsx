"use client";

import {
	Container,
	Row,
	Col,
	Button,
	Card,
	Accordion,
	ListGroup,
} from "react-bootstrap";
import externalSourceData from "../../public/info/external-sources.json";
import { EXTERNAL_SOURCE_KEYS } from "../consts/external-source-keys.const";

export default function Page() {
	const [marathonExternal ] = useState<ExteralSource>(externalSourceData.find((x) => x.key ==EXTERNAL_SOURCE_KEYS.BIALYSTOK_WEB)
		(external) => external.key == EXTERNAL_SOURCE_KEYS.MARATHON_FORM
	);
	return (
		<Container className="my-3 my-xl-5">
			<Row>
				<Col xl={{ span: 8, offset: 2 }} className="my-2 img-overlay">
					<h1 className="text-center">Zapisy na bieg trwają!</h1>
					<p className="text-center px-5 px-md-0">
						Biegnij dla zdrowia i&nbsp;zabawy! Dołącz do tysięcy biegaczy
						w maratonie w Białymstoku! Nie przegap tej okazji!
					</p>
				</Col>

				<Col xl={{ span: 8, offset: 2 }} className="my-3 my-xl-5">
					<Accordion defaultActiveKey={["0"]}>
						<Accordion.Item eventKey="0">
							<Accordion.Header>
								Jak zarejestrować się na bieg?
							</Accordion.Header>

							<Accordion.Body>
								<ListGroup as="ol" numbered>
									<ListGroup.Item variant="light">
										Należy otworzyć formularz zgłoszeniowy
										dostępny poniżej.
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Wybrać odpowiednią opcję w&nbsp;zależności od
										tego czy jest się uczestnikiem czy
										opiekunem uczestnika.
									</ListGroup.Item>
									<ListGroup.Item variant="light">
										Uzupełnić dane.
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Kliknąć "prześlij formularz".
									</ListGroup.Item>
									<ListGroup.Item variant="light">
										Oczekiwać na potwierdzenie z naszej
										strony 🙂 ( UWAGA: wiadomości zwrotne
										NIE SĄ generowane automatycznie,
										sprawdzamy formularze i&nbsp;odpisujemy
										własnoręcznie dlatego też czas
										oczekiwania na wiadomość może być
										wydłużony).
									</ListGroup.Item>
								</ListGroup>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="1">
							<Accordion.Header>Opłata startowa</Accordion.Header>

							<Accordion.Body>
								<ListGroup>
									<ListGroup.Item variant="light">
										Jest pobierana w momencie odbierania
										pakietów startowych (symboliczny wrzut
										do puszki).
									</ListGroup.Item>
								</ListGroup>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="2">
							<Accordion.Header>
								Dostępne trasy biegów
							</Accordion.Header>

							<Accordion.Body>
								<ListGroup as="ol" numbered>
									<ListGroup.Item variant="light">
										Bieg małego superbohatera: 300 metrów
										dzieci do 9 lat
									</ListGroup.Item>
									<ListGroup.Item variant="dark">
										Bieg Chillowy kilos: 1 km (brak
										ograniczeń wiekowych)
									</ListGroup.Item>
									<ListGroup.Item variant="light">
										Bieg Fantastyczna piątka: 5 km (brak
										ograniczeń wiekowych)
									</ListGroup.Item>

									<p className="my-2 mt-4">
										Mapki zostaną udostępnione bliżej
										terminu wydarzenia o czym poinformujemy
										na naszych social mediach 🙂
									</p>
								</ListGroup>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Col>

				<Col
					xl={{ span: 8, offset: 2 }}
					style={{ marginTop: "8rem", marginBottom: "1rem" }}
				>
					<Card>
						<Card.Body>
							<div className="text-center text-md-start">
								<h1 className="info">
									Nie czekaj, zarejestruj się i&nbsp;biegnij z&nbsp;
									nami!
								</h1>
								<h6>
									Wejdź w formularz i wypełnij (UWAGA:
									przekierowanie do innej strony):
								</h6>
								<Button
									href={marathonExternal.url}
									className="button-radioactive"
								>
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
