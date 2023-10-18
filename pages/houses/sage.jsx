import { S3 } from "@aws-sdk/client-s3";

import { Container, Row, Col, Carousel, Table, Button } from 'react-bootstrap';
import Image from 'next/image';

export async function getStaticProps() {
  const s3 = new S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY
    }});

    const { Contents } = await s3.listObjects({ Bucket: "zaratan.world" });
    const cdnRoot = "https://d3gacl6pm59h8m.cloudfront.net/"
    const regex = /public\/images\/sage\/.*\.JPG/i;

    const images = Contents
      .filter(item => regex.test(item.Key))
      .map(item => cdnRoot + item.Key)

  return { props: { images } }
}

export default function ({ images }) {
  const applyUrl = "https://zaratan.managebuilding.com/Resident/rental-application/new";

  return (
    <Container fluid>
      <Row className="p-5">
        <Col />
        <Col className="col-8 col-md-6 col-xl-4">
          <div className="center">
            <h1 className="spaced logo" style={{fontSize: "78px"}}>Sage House</h1>
            <h1 style={{fontSize: "60px"}}>&#x1F331;</h1>
            <br></br>

            <p>
              A beautifully-restored 1905 Craftsman, in the heart of vibrant <b>Highland Park, Los Angeles</b>.
            </p>
            <p>
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
          <Table className="table center">
            <thead>
              <tr><th></th><th>Sage</th><th>Craiglist</th></tr>
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

          <p className="center">*Pricing varies by room</p>
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
    </Container>
  );
}
