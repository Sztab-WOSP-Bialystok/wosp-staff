import Link from "next/link";
import { NavigationElement } from "./navigation";
import ThemeProvider from "../../theme-provider";
import { Nav } from "../../bootstrap";

type NavElementProps = NavigationElement;

function NavElement({ link, name, disabled }: NavElementProps) {
  return (
    <ThemeProvider>
      <Nav.Link
        as={Link}
        href={link}
        disabled={disabled}
        data-bs-toggle="collapse"
      >
        {name}
      </Nav.Link>
    </ThemeProvider>
  );
}

export default NavElement;
