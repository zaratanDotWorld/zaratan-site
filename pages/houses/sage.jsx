import { Container, Row, Col, Carousel, Table, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import Headpiece from '../../components/headpiece';
import { getImages } from '../../utils/s3';

export async function getStaticProps() {
  const regex = /public\/images\/sage\/.*\.JPG/i;
  const images = await getImages({ regex });
  return { props: { images } }
}

export default function ({ images }) {
  const applyUrl = "https://zaratan.managebuilding.com/Resident/rental-application/new";
  const manualUrl = "https://github.com/zaratanDotWorld/mirror/wiki";

  return (
    <Container fluid>
      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
            mainText="Sage House"
            subText="Where It All Began"
            icon="&#x1F331;"
            scale={25}
          />

          <br></br>
          <div className="center">
            <p>
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

            <br></br>
            <Button variant="outline-success" size="lg" href={applyUrl}>Apply Now</Button>
          </div>
        </Col>
        <Col />
      </Row>

      <Row className="p-5 red">
        <Col />
        <Col>
          <Table className="center" style={{"--bs-table-bg": "rgba(0, 0, 0, 0.0)"}}> {/* TODO: fix this styling */}
            <thead>
              <tr><th></th><th>Sage</th><th>Craigslist</th></tr>
            </thead>
            <tbody>
              <tr><th>Rent</th><td>$1,200*</td><td>$1050</td></tr>
              <tr><th>Utilities</th><td>Included</td><td>$80</td></tr>
              <tr><th>Supplies</th><td>Included</td><td>$60</td></tr>
              <tr><th>Food Staples</th><td>Included</td><td>$120</td></tr>
              <tr><th>Internet</th><td>Included</td><td>$40</td></tr>
              <tr><th>Total</th><td style={{backgroundColor: "#00ff7f33"}}>$1,200</td><td>$1,350</td></tr>
            </tbody>
          </Table>

          <p className="center">*Price varies by room</p>
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col>
          <Carousel interval={3600}>
            {
              images.map((imageUri, i) =>
                <Carousel.Item key={i}>
                  <Image
                    className="rounded border border-3"
                    src={imageUri}
                    alt={imageUri}
                    width={320}
                    height={435}
                    style={{ margin: "auto", display: "block" }}
                  />
                </Carousel.Item>
              )
            }
          </Carousel>
        </Col>
        <Col />
      </Row>

      <Row className="pb-4 center">
        <Col>
          <p style={{ fontSize: "30px" }}>
            &#x1f449; <Link href={manualUrl}>How Sage Works</Link> &#x1f448;
          </p>
        </Col>
      </Row>
    </Container>
  );
}
