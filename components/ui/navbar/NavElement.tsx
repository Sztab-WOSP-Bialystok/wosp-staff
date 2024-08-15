import {Nav} from "react-bootstrap";
import Link from "next/link";
import {NavigationElement} from "./navigation";

type NavElementProps = {data: NavigationElement}

function NavElement({ data }: NavElementProps) {

    return (
        <Nav.Link as={Link} href={data.link} disabled={data.disabled} data-bs-toggle="collapse">
            {data.name}
        </Nav.Link>
    )
}

export default NavElement