import { Col, Container, Row } from "react-bootstrap";
import { PartnerData, PartnerGroupData } from "../page";
import Link from "next/link";

type Props = { data: PartnerGroupData };

export default function PartnerGroup({ data }: Props) {
  return (
    <Container>
      <Row className="justify-content-center row-gap-3 justify-content-evenly">
        {data.partners.map((partner) => (
          <Col
            className="flex align-items-center justify-content-center my-2"
            xs={getColSpan(data, partner, BsBreakPoint.xs)}
            sm={getColSpan(data, partner, BsBreakPoint.sm)}
            md={getColSpan(data, partner, BsBreakPoint.md)}
            xxl={getColSpan(data, partner, BsBreakPoint.xxl)}
          >
            <PartnerImg data={partner} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

type PartnerProps = { data: PartnerData };

export function PartnerImg({ data: partner }: PartnerProps) {
  const logo = (
    <img
      title={partner.name}
      src={partner.imagePath}
      style={{
        height: "8rem",
        width: "100%",
        maxWidth: "16rem",
        objectFit: "contain",
      }}
    />
  );

  if (partner.link) {
    <Link href={partner.link}>{logo}</Link>;
  }

  return logo;
}

enum BsBreakPoint {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}

function getColSpan(
  group: PartnerGroupData,
  partner: PartnerData,
  breakPoint: BsBreakPoint
) {
  const partnersCount = group.partners.length;
  switch (breakPoint) {
    case BsBreakPoint.xs:
      return 12;

    case BsBreakPoint.sm:
      if (partnersCount >= 3) {
        return 6;
      } else if (partnersCount >= 2) {
        return 6;
      } else {
        return 6;
      }

    case BsBreakPoint.md:
    case BsBreakPoint.lg:
    case BsBreakPoint.xl:
      if (partnersCount >= 3) {
        return 3;
      } else if (partnersCount >= 2) {
        return 6;
      } else {
        return 6;
      }

    case BsBreakPoint.xxl:
      if (partnersCount >= 3) {
        return 3;
      } else if (partnersCount >= 2) {
        return 6;
      } else {
        return 6;
      }
  }
}
