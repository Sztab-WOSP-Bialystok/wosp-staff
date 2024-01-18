import Link from "next/link";
import { Card, Nav } from "react-bootstrap";
import externalSources from "../../../public/info/external-sources.json";
import { FAQ_CATEGORY_KEYS } from "../../consts/faq-category-keys.const";

export type ExteralSource = {
  key: string;
  title: string;
  url: string;
};

export default function VolounteerTabHeader() {
  return (
    <div>
      {(externalSources as ExteralSource[])
        .filter((source) => source.key === FAQ_CATEGORY_KEYS.VOLOUNTEER)
        .map((source) => (
          <div className="my-3 mx-0 mx-sm-3" key={source.key}>
            <h6 className="theme-pink">
              Więcej szczegółów dotyczących rejestracji na stronie głównego
              Sztabu:
            </h6>
            <Card.Link
              href={source.url}
            >
              <i className="me-2 bi bi-box-arrow-up-right"></i>
              {source.title}
            </Card.Link>
          </div>
        ))}
    </div>
  );
}
