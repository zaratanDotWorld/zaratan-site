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
      <Row>
        <Col className="col-lg-4 order-1 order-lg-2 p-4 p-sm-5 p-lg-4 p-xl-5 green">
          <div className="center">
            <h1 className="spaced logo" style={{fontSize: "78px"}}>Sage House</h1>
            <h1 style={{fontSize: "60px"}}>&#x1F331;</h1>
            <br></br>

            <p>
              A beautifully-restored 1905 Craftsman, in the heart of vibrant Highland Park, Los Angeles.
            </p>
            <p>
              This nine-bedroom home features a
              restaurant-style kitchen,
              original dining room,
              sunny living room,
              quiet library,
              second-floor deck,
              backyard with fire pit,
              guest room,
              and four full bathrooms.
            </p>

            <br></br>
            <Button variant="outline-success" size="lg" href={applyUrl}>Apply Now</Button>
          </div>
        </Col>
        <Col className="col-lg-4 order-2 order-lg-1 p-4 p-sm-5 p-lg-4 p-xl-5 red">
          <Table className="table center">
            <thead>
              <tr><th></th><th>Sage</th><th>Craiglist</th></tr>
            </thead>
            <tbody>
              <tr><th>Rent</th><td>$1,150*</td><td>$950</td></tr>
              <tr><th>Utilities</th><td>Included</td><td>$80</td></tr>
              <tr><th>Supplies</th><td>Included</td><td>$60</td></tr>
              <tr><th>Food Staples</th><td>Included</td><td>$70</td></tr>
              <tr><th>Internet</th><td>Included</td><td>$40</td></tr>
              <tr><th>Total</th><td style={{backgroundColor: "#00ff7f33"}}>$1,150</td><td>$1,200</td></tr>
            </tbody>
          </Table>

          <p className="center">*Pricing varies by room</p>
        </Col>
        <Col className="col-lg-4 order-3 order-lg-3 p-4 p-sm-5 p-lg-4 p-xl-5 blue">
          <Carousel interval={3600}>
            {
              images.map((imageUri, i) =>
                <Carousel.Item key={i}>
                  <Image
                    className="img-thumbnail d-block w-100"
                    src={imageUri}
                    alt={imageUri}
                    width={200}
                    height={350}
                  />
                </Carousel.Item>
              )
            }
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
