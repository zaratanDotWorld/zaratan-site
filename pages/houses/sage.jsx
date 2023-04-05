import { S3 } from "@aws-sdk/client-s3";

import { Container, Row, Col, Carousel, Table } from 'react-bootstrap';
import Image from 'next/image';

export async function getStaticProps() {
  const s3 = new S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY
    }});

    const { Contents } = await s3.listObjects({ Bucket: "zaratan.world" });
    const imageRoot = "https://s3.amazonaws.com/zaratan.world/"
    const regex = /public\/images\/sage\/.*\.JPG/i;

    const carouselImages = Contents
      .filter(item => regex.test(item.Key))
      .map(item => imageRoot + item.Key)

  return { props: { carouselImages } }
}

export default function ({ carouselImages }) {
  return (
    <Container fluid>
      <Row>
        <Col className="col-lg-4 order-1 order-lg-2 p-4 p-sm-5 p-lg-4 p-xl-5 green">
          <h1 className="center spaced logo" style={{fontSize: "78px"}}>Sage House</h1>
          <h1 className="center" style={{fontSize: "60px"}}>&#x1F331;</h1>

          <br></br>

          <p>
            Come live in a gorgeous 1905 Craftsman in the heart of vibrant Highland Park, Los Angeles.
          </p>
          <p>
            Recently renovated, this nine-bedroom home features a
            restaurant-style kitchen,
            wainscotted dining room,
            sunny living room,
            quiet library,
            second-floor deck,
            large backyard with fire pit,
            guest room,
            and four full bathrooms.
          </p>

          <p className="center spaced rainbow-text-animated" style={{fontSize: "32px"}}>Now Open!</p>
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
            carouselImages.map((imageUri, i) =>
              <Carousel.Item key={i}>
                <Image
                  className="img-thumbnail d-block w-100"
                  src={imageUri}
                  alt={imageUri}
                  width={200}
                  height={265}
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
