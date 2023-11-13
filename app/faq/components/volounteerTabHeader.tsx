import Link from "next/link";
import externalSources from "public/info/external-sources.json";
import { Nav } from "react-bootstrap";

export type ExteralSource = {
  key: string;
  title: string;
  url: string;
};

export default function VolounteerTabHeader() {
  return (
    <div>
      {(externalSources as ExteralSource[])
        .filter((source) => source.key === "for_volounteer")
        .map((source) => (
          <div className="my-3 mx-0 mx-sm-3">
            <h6 style={{ color: "var(--pink-color)" }}>
              Więcej szczegółów dotyczących rejestracji na stronie głównego
              Sztabu:
            </h6>
            <Nav.Link
              as={Link}
              href={source.url}
              data-bs-toggle="collapse"
              className="d-flex align-items-center text-wrap link-primary text-decoration-underline"
            >
              <i className="me-2 bi bi-box-arrow-up-right"></i>
              {source.title}
            </Nav.Link>
          </div>
        ))}
    </div>
  );
}
