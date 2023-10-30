import {Nav} from "react-bootstrap";
import Link from "next/link";
import {NavigationElement} from "./navigation";

type NavElementProps = NavigationElement

function NavElement({ link, name, disabled }: NavElementProps) {

    return (
        <Nav.Link as={Link} href={link} disabled={disabled} data-bs-toggle="collapse">
            {name}
        </Nav.Link>
    )
}

export default NavElement