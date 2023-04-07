import { S3 } from "@aws-sdk/client-s3";
import Image from 'next/image';
import Link from "next/link";
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';

export async function getStaticProps() {
  const s3 = new S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY
    }});

    const { Contents } = await s3.listObjects({ Bucket: "zaratan.world" });
    const cdnRoot = "https://d3gacl6pm59h8m.cloudfront.net/"
    const regex = /public\/images\/mirror\/.*\.jpg/i;

    const images = Contents
      .filter(item => regex.test(item.Key))
      .map(item => cdnRoot + item.Key)

  return { props: { images } }
}

export default function ({ images }) {
  const checkoutLink = "https://buy.stripe.com/7sI5lwcjC3FXabKeUW";
  return (
    <Container fluid>
      <Row>
        <Col className="col-lg-4 order-1 order-lg-2 p-4 p-sm-5 p-lg-4 p-xl-5 green">
          <div className="center">
            <h1 className="spaced logo" style={{ fontSize: "92px" }}>Mirror</h1>
            <p className="spaced rainbow-text-animated" style={{ fontSize: "32px" }}>No gods, no masters</p>
            <h1 style={{ fontSize: "92px" }}>&#x1f4a0;</h1>
            <br></br>
            <Button variant="outline-success" size="lg" href={checkoutLink}>Start free trial</Button>
            <br></br>
            <br></br>
            <Link href="https://archive.org/details/kronovet-metagov-20230329">Watch the talk</Link>
          </div>
        </Col>
        <Col className="col-lg-4 order-2 order-lg-1 p-4 p-sm-5 p-lg-4 p-xl-5 red">
          <h5>Mirror is pioneering software for co-living, built on Slack.</h5>
          <hr></hr>
          <p>Developed by economists and game designers, Mirror is a set of tools for helping people share space:</p>
          <ul>
            <li><b>Chores</b> for keeping it clean</li>
            <li><b>Hearts</b> for mutual accountability</li>
            <li><b>Things</b> for group purchasing</li>
            <li>And more to come</li>
          </ul>

          <p>Mirror contains the latest thinking in ethical technology, with four core principles:</p>
          <ul>
            <li>No managers or privileged roles</li>
            <li>Simple and intuitive inputs</li>
            <li>Humans decide, machines bookkeep</li>
            <li>Always-on, asynchronous processes</li>
          </ul>
        </Col>
        <Col className="col-lg-4 order-3 order-lg-3 p-4 p-sm-5 p-lg-4 p-xl-5 blue">
          <Carousel interval={3600} variant="dark">
            {
              images.map((imageUri, i) =>
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
  )
}
