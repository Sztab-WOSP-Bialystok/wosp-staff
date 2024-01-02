import Link from "next/link";
import { NavigationElement } from "./navigation";
import { Nav } from "../../bootstrap";

type NavElementProps = NavigationElement;

function NavElement({ link, name, disabled }: NavElementProps) {
  return (
    <Nav.Link
      as={Link}
      href={link}
      disabled={disabled}
      data-bs-toggle="collapse"
    >
      {name}
    </Nav.Link>
  );
}

export default NavElement;
