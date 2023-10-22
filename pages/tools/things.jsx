import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import IPhoneCarousel from '../../components/carousel';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';

export async function getStaticProps() {
  const regex = /public\/images\/mirror\/things.*\.jpg/i;
  const images = await getImages({ regex });
  return { props: { images } }
}

export default function ({ images }) {
  const installUrl = "https://slack.com/oauth/v2/authorize?client_id=1003435112487.4076729845777" +
    "&scope=channels:join,chat:write,commands,users:read&user_scope=";
  const manualUrl = "https://github.com/zaratanDotWorld/mirror/wiki/Things";

  return (
    <Container fluid>
      <Row className="p-5 center">
       <Col />
        <Col md={8} xl={6}>
          <Headpiece
              mainText="Things"
              subText="Keeping It Stocked"
              icon="&#x1f6d2;"
            />
            <br></br>
            <SlackButton text="Install Now" url={installUrl} />
        </Col>
        <Col />
      </Row>

      <Row className="blue pt-5 px-5">
        <Col />
        <Col md={10} xl={6}>
          <h5><b>Things is Zaratan's purchasing tool</b>, helping people easily manage shared funds.</h5>
          <p>
            Things lets folks co-create a list of shared staples and makes it easy to buy more when you start running low.
            Proposed "buys" are approved by emoji-vote, with more upvotes needed to approve larger purchases.
          </p>
          <hr></hr>
        </Col>
        <Col />
      </Row>

      <Row className="blue pb-5 px-5">
        <Col/>
        <Col md={5} xl={3}>
          <h5>&#x1f62d; Old Way</h5>
          <ul>
            <li>Many spreadsheets</li>
            <li>Tracking inventory</li>
            <li>Complex preferences</li>
          </ul>
        </Col>
        <Col md={5} xl={3}>
          <h5>&#x1f929; New Way</h5>
          <ul>
            <li>Simple process</li>
            <li>Everyone can participate</li>
            <li>Clear needs</li>
          </ul>
        </Col>
        <Col/>
      </Row>

      <Row className="p-5">
        <Col />
        <Col lg={5} xl={4} className="p-3">
          <IPhoneCarousel images={images} />
        </Col>
        <Col lg={5} xl={4} className="p-3">
          <IPhoneCarousel images={[...images].reverse()} />
        </Col>
        <Col />
      </Row>

      <Row className="pb-4 center">
        <Col>
          <p style={{ fontSize: "1.5em" }}>
            &#x1f449; <Link href={manualUrl}>Read the manual</Link> &#x1f448;
          </p>
        </Col>
      </Row>
    </Container>
  )
}
