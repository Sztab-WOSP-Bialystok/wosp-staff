import { Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import BrandNavbar from "./BrandNavbar";
import { navigations } from "./navigation";
import NavElement from "./NavElement";
import NavGroupElement from "./NavGroupElement";
import { NavigationElementGroup } from "./navigation";

function MainNavbar() {
	console.log(navigations);
	return (
		<Navbar collapseOnSelect expand="xl" sticky="top" variant="dark">
			<Container>
				<BrandNavbar />
				<Navbar.Toggle
					aria-controls="basic-navbar-nav"
					className="p-0"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						{navigations
							.filter((x) => x.showInNavbar)
							.map((navigation) =>
								(navigation as NavigationElementGroup)
									.elements ? (
									<NavGroupElement //TODO: @Kompanel it is not displayed. WHY???
										data={
											navigation as NavigationElementGroup
										}
									/>
								) : (
									<NavElement
										key={navigation.name}
										data={navigation}
									/>
								)
							)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MainNavbar;
