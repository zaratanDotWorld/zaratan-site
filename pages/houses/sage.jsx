import Link from 'next/link';

import { Container, Row, Col, Table, Button } from 'react-bootstrap';

import Carousel from '../../components/carousel';
import Headpiece from '../../components/headpiece';

import { getImages } from '../../utils/s3';
import { applyUrl, nbcUrl, supernuclearUrl } from '../../utils/constants';

export async function getStaticProps() {
  const regex = /public\/images\/sage\/mls\/.*\.jpg/i;
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
            mainText="Sage House"
            subText="Where It Started"
            icon="&#x1FAB4;"
            color="red"
          />

          <br></br>
          <div className="center">
            <p>
              <em>As seen on <Link href={nbcUrl}>NBC4 News</Link> & <Link href={supernuclearUrl}>Supernuclear</Link></em>
              <br></br>
              <br></br>
              A beautifully-restored 1905 Craftsman, in the heart of vibrant <b>Highland Park, Los Angeles</b>.
              <br></br>
              <br></br>
              This nine-bedroom home features a
              restaurant-style kitchen,
              woodworked dining room,
              sunny living room,
              quiet library,
              upstairs deck,
              backyard fire pit,
              recording studio,
              gym,
              guest room,
              and four full bathrooms.
            </p>
            <p>A proud supporter of the  <Link href="https://tongva.networkforgood.com/">Tongva Conservancy</Link></p>
            <br></br>
            <Button variant="outline-danger" size="lg" href={applyUrl}>Apply Now</Button>
          </div>
        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-red center">
        <Col />
        <Col md={8} xl={6}>
          <Table hover responsive style={{"--bs-table-bg": "rgba(0, 0, 0, 0.0)"}}>
            <thead>
              <tr><th></th><th>Sage</th><th>Craigslist</th></tr>
            </thead>
            <tbody>
              <tr><th>Rent</th><td>$1,200*</td><td>$1,050</td></tr>
              <tr><th>Utilities</th><td>Included</td><td>$80</td></tr>
              <tr><th>Supplies</th><td>Included</td><td>$60</td></tr>
              <tr><th>Food Staples</th><td>Included</td><td>$120</td></tr>
              <tr><th>Internet</th><td>Included</td><td>$40</td></tr>
              <tr><th>Total</th><td style={{backgroundColor: "#00ff7f33"}}>$1,200</td><td>$1,350</td></tr>
            </tbody>
          </Table>

          <p>*Price varies by room</p>
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
