import Carousel from "react-bootstrap/Carousel";
import { PartnerImg } from "../../partners/components/partner-group";
import partnerData from "../../../public/info/partners-data.json";
import { PartnerGroupData } from "../../partners/page";

function PartnersCarousel() {
  const partners = (partnerData as PartnerGroupData[])
    .map((x) => x.partners)
    .reduce((prev, curr) => {
      return curr.concat(prev);
    }, []);

  return (
    <Carousel fade interval={2000} indicators={false}>
      {partners.map((partner) => (
        <Carousel.Item className="justify-content-center">
          <PartnerImg data={partner} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default PartnersCarousel;
