"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import externalSourceData from "../../public/info/external-sources.json";
import { EXTERNAL_SOURCE_KEYS } from "../consts/external-source-keys.const";
import { useState } from "react";

export default function Page() {
	const [marathonExternal] = useState(
		externalSourceData.find(
			(external) => external.key == EXTERNAL_SOURCE_KEYS.MARATHON_FORM
		)
	);
	return (
		<Container className="my-3 my-xl-5">
			<Row>
				<Col xl={{ span: 8, offset: 2 }} className="my-2 img-overlay">
					<h1 className="text-center">Zapisy na bieg trwają!</h1>
					<p className="text-center px-5 px-md-0">
						Biegnij dla zdrowia i&nbsp;zabawy! Dołącz do tysięcy
						biegaczy w maratonie w Białymstoku! Nie przegap tej
						okazji!
					</p>
				</Col>

				<Col xl={{ span: 8, offset: 2 }} className="my-3 my-xl-5">
					<Card>
						<Card.Body>
							<h1>Jak zarejestrować się na bieg?</h1>
							<div className="px-2">
								<ol type="1">
									<li>
										Należy otworzyć formularz zgłoszeniowy
										dostępny poniżej.
									</li>
									<li>
										Wybrać odpowiednią opcję
										w&nbsp;zależności od tego czy jest się
										uczestnikiem czy opiekunem uczestnika.
									</li>
									<li>Uzupełnić dane.</li>
									<li>Kliknąć "prześlij formularz".</li>
									<li>
										Oczekiwać na potwierdzenie z naszej
										strony 🙂 ( UWAGA: wiadomości zwrotne
										NIE SĄ generowane automatycznie,
										sprawdzamy formularze i&nbsp;odpisujemy
										własnoręcznie dlatego też czas
										oczekiwania na wiadomość może być
										wydłużony).
									</li>
								</ol>
							</div>
							<h1>Opłata startowa</h1>
							<p className="px-4">
								Jest pobierana w momencie odbierania pakietów
								startowych (symboliczny wrzut do puszki).
							</p>
							<h1>Dostępne trasy biegów</h1>
							<div className="px-3">
								<ul>
									<li>
										Bieg małego superbohatera: 300 metrów
										dzieci do 9 lat
									</li>
									<li>
										Bieg Chillowy kilos: 1 km (brak
										ograniczeń wiekowych)
									</li>
									<li>
										Bieg Fantastyczna piątka: 5 km (brak
										ograniczeń wiekowych)
									</li>
								</ul>
							</div>
							<p className="pt-2">
								Mapki zostaną udostępnione bliżej terminu
								wydarzenia o czym poinformujemy na naszych
								social mediach 🙂
							</p>
						</Card.Body>
					</Card>
				</Col>

				<Col
					xl={{ span: 8, offset: 2 }}
					style={{ marginTop: "1rem", marginBottom: "1rem" }}
				>
					<Card>
						<Card.Body>
							<div className="text-center text-md-start">
								<h1>
									Nie czekaj, zarejestruj się i&nbsp;biegnij
									z&nbsp;nami!
								</h1>
							</div>
							<div className="text-center text-md-start">
								<Card.Link href={marathonExternal.url}>
									{marathonExternal.title}
									<i className="ms-2 bi bi-box-arrow-up-right"></i>
								</Card.Link>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
