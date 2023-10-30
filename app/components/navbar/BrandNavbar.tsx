import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Link from "next/link";

function BrandNavbar() {
  return (
    <Navbar.Brand className="me-0 me-sm-2 d-flex">
      <Nav.Link
        as={Link}
        href="/"
        data-bs-toggle="collapse"
        className="d-flex align-items-center text-wrap link-primary text-decoration-none me-2"
      >
        <div className="d-block d-md-none me-2" style={{ lineHeight: "14px" }}>
          <i className="bi-house-heart-fill fs-2"></i>
        </div>
        <div
          className="d-block d-md-none"
          style={{ lineHeight: "14px", height: 34 }}
        >
          <span style={{ fontSize: 13, lineHeight: 0 }}>
            Sztab&nbsp;WOŚP
            <br />
            Białystok&nbsp;#6314
          </span>
        </div>
        
        <div className="d-none d-md-block">
          Sztab&nbsp;WOŚP Białystok&nbsp;#6314
        </div>
      </Nav.Link>
      <div className="d-flex align-items-center me-2">
        <Link href="https://www.facebook.com/bialystokwosp">
          <i className="bi bi-facebook link-primary fs-3"></i>
        </Link>
      </div>
      <div className="d-flex align-items-center me-2">
        <Link href="https://www.instagram.com/wosp.bialystok">
          <i className="bi bi-instagram link-primary fs-3"></i>
        </Link>
      </div>
    </Navbar.Brand>
  );
}

export default BrandNavbar;
