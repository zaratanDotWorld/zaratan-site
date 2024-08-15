import Link from 'next/link';

import { Container, Row, Col, Button } from 'react-bootstrap';

import Carousel from '../../components/carousel';
import Headpiece from '../../components/headpiece';

import { getImages } from '../../utils/s3';
import { applyUrl } from '../../utils/constants';

export async function getStaticProps() {
  const regex = /public\/images\/cactus\/mls\/.*\.jpg/i;
  const images = await getImages({ regex });
  return { props: { images } }
}

export default function ({ images }) {
  return (
    <Container fluid>
      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
            mainText="Cactus Cottage"
            subText="An Urban Sanctuary"
            icon="&#x1F335;"
            color="blue"
          />

          <br></br>
          <div className="center">
            <Button variant="outline-primary" size="md" href={applyUrl}>Apply Now</Button>
          </div>
        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-blue center">
        <Col />
        <Col md={8} xl={6}>
          <p>
            A stunning cottage in the heart of vibrant <b>Highland Park, Los Angeles</b>.
            <br></br>
            <br></br>
            This freestanding tiny home features
            spanish tile floors,
            full kitchen,
            full bathroom,
            amazing light,
            heating and AC,
            vaulted ceiling,
            tasteful design,
            storage loft,
            with a
            beautiful cactus,
            fire pit,
            recording studio,
            gym,
            parking,
            and basement storage
            on-site.
          </p>
          <p>A proud supporter of the  <Link href="https://tongva.networkforgood.com/">Tongva Conservancy</Link></p>
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <Carousel images={images} height={500} alt="Sage House photo" />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
