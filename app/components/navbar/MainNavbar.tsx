import { Container, Nav, Navbar } from "react-bootstrap";
import BrandNavbar from "./BrandNavbar";
import { navigations } from "./navigation";
import NavElement from "./NavElement";

function MainNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      sticky="top"
      variant="dark"
    >
      <Container>
        <BrandNavbar />
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="p-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navigations
              .filter((x) => x.showInNavbar)
              .map(({ link, name, disabled }, index) => (
                <NavElement
                  key={name + index}
                  link={link}
                  name={name}
                  disabled={disabled}
                />
              ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
