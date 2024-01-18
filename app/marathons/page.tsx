"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import externalSourceData from "../../public/info/external-sources.json";
import { EXTERNAL_SOURCE_KEYS } from "../consts/external-source-keys.const";
import { useState } from "react";
import spiral from "public/images/41A_S_32FinalWOSP2024_grafika_fragment_podglad.png";

export default function Page() {
	const [formSource] = useState(
		externalSourceData.find(
			(external) => external.key == EXTERNAL_SOURCE_KEYS.MARATHON_FORM
		)
	);

	const [fbEventSource] = useState(
		externalSourceData.find(
			(external) => external.key == EXTERNAL_SOURCE_KEYS.MARATHON_FB_EVENT
		)
	);

	return (
		<Container className="my-3 my-xl-5">
			<Row>
				<div className="position-relative">
					<img
						src={spiral.src}
						width={400}
						style={{
							position: "absolute",
							top: "-30px",
							left: "-81px",
							zIndex: "-1",
						}}
					></img>
					<Col
						xl={{ span: 8, offset: 2 }}
						className="my-2 img-overlay"
					>
						<h1 className="text-center">Zapisy na bieg trwają!</h1>
						<h4 className="text-center px-5 px-md-0">
							Biegnij dla zdrowia i&nbsp;zabawy! Dołącz do tysięcy
							biegaczy w maratonie w Białymstoku -&nbsp;nie
							przegap tej okazji!
						</h4>
					</Col>

					<Col xl={{ span: 8, offset: 2 }} className="my-3 my-xl-5">
						<Card>
							<Card.Body>
								<h2>Jak zarejestrować się na bieg?</h2>
								<div>
									<ol type="1">
										<li>
											Należy otworzyć{" "}
											<Card.Link href={formSource.url}>
												formularz zgłoszeniowy
												<i className="ms-2 bi bi-box-arrow-up-right"></i>
											</Card.Link>
										</li>
										<li>
											Wybrać odpowiednią opcję
											w&nbsp;zależności od tego czy jest
											się uczestnikiem czy opiekunem
											uczestnika.
										</li>
										<li>Uzupełnić dane.</li>
										<li>Kliknąć "prześlij formularz".</li>
										<li>
											Oczekiwać na potwierdzenie z naszej
											strony.
										</li>
									</ol>
									<p className="pt-2">
										<span className="theme-pink">
											UWAGA:{" "}
										</span>
										wiadomości zwrotne
										<span className="fw-bold">
											{" "}
											nie są generowane automatycznie,{" "}
										</span>
										sprawdzamy formularze i&nbsp;odpisujemy
										własnoręcznie dlatego też czas
										oczekiwania na wiadomość może być
										wydłużony.
									</p>
								</div>
								<h4>Opłata startowa</h4>
								<p>
									Jest pobierana w momencie odbierania
									pakietów startowych (symboliczny wrzut do
									puszki).
								</p>
								<h4>Dostępne trasy biegów</h4>
								<div>
									<ul>
										<li>
											Bieg małego superbohatera: 300
											metrów dzieci do 9 lat
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
				</div>
				<Row className="justify-content-center">
					<Col
						lg={{ span: 8, offset: 2 }}
						xl={{ span: 6, offset: 0 }}
						style={{ marginTop: "3rem", marginBottom: "1rem" }}
					>
						<div className="position-relative">
							<img
								src={spiral.src}
								width={400}
								style={{
									position: "absolute",
									top: "-30px",
									left: "-350px",
									zIndex: "-1",
								}}
							></img>
							<Card>
								<Card.Body>
									<div className="text-center text-xl-start">
										<h4>
											Bądź na bieżąco - obserwuj
											wydarzenie na Facebooku
										</h4>
									</div>
									<div className="text-center text-xl-start">
										<Card.Link href={fbEventSource.url}>
											{fbEventSource.title}
											<i className="ms-2 bi bi-box-arrow-up-right"></i>
										</Card.Link>
									</div>
								</Card.Body>
							</Card>
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col
						lg={{ span: 8, offset: 2 }}
						xl={{ span: 6, offset: 0 }}
						style={{ marginTop: "3rem", marginBottom: "1rem" }}
					>
						<div className="position-relative">
							<Card>
								<Card.Body>
									<div className="text-center text-xl-start">
										<h4>
											Nie czekaj, zarejestruj się
											i&nbsp;biegnij z&nbsp;nami!
										</h4>
									</div>
									<div className="text-center text-xl-start">
										<Card.Link href={formSource.url}>
											{formSource.title}
											<i className="ms-2 bi bi-box-arrow-up-right"></i>
										</Card.Link>
									</div>
								</Card.Body>
							</Card>
						</div>
					</Col>
				</Row>
			</Row>
		</Container>
	);
}
