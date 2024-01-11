import { NavigationElementGroup} from "./navigation";
import Link from "next/link";
import { NavDropdown } from "react-bootstrap";

type NavGroupElementProps = {data: NavigationElementGroup};

function NavGroupElement({ data }: NavGroupElementProps) {
	return (
		<NavDropdown id={data.name} title={data.name}>
			{data.elements.map((element) => (
				<NavDropdown.Item key={element.name} as={Link} href={element.link} disabled={element.disabled}>
					{element.name}
				</NavDropdown.Item>
			))}
		</NavDropdown>
	);
}

export default NavGroupElement;
