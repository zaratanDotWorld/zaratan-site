import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import Carousel from '../../components/carousel';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';
import { docsUrl } from '../../utils/constants';

export async function getStaticProps() {
  const regex = /public\/images\/mirror\/framed-mobile-things.*\.jpg/i;
  const images = await getImages({ regex });
  return { props: { images } }
}

export default function ({ images }) {
  const installUrl = "https://things.mirror.zaratan.world/slack/install";

  return (
    <Container fluid>
      <Row className="p-5 center">
       <Col />
        <Col md={8} xl={6}>
          <Headpiece
              mainText="Things"
              subText="Keep It Stocked"
              icon="&#x1f6d2;"
              color="blue"
            />
            <br></br>
            <SlackButton text="Install Now" url={installUrl} />
        </Col>
        <Col />
      </Row>

      <Row className="accent-blue pt-5 px-5">
        <Col />
        <Col md={10} xl={6}>
          <h5><b>Things is Zaratan's buying tool</b>, helping people manage shared funds.</h5>
          <p>
            Things lets folks co-create a list of shared staples that everyone uses.
            When supplies run low, anyone can propose a "buy."
            More expensive buys need more upvotes to be approved.
          </p>
          <p>
            Budgets are public, letting folks collectively set financial priorities.
          </p>
          <hr></hr>
        </Col>
        <Col />
      </Row>

      <Row className="accent-blue pb-5 px-5">
        <Col/>
        <Col md={5} xl={3}>
          <h5>&#x1f62d; Old Way</h5>
          <ul>
            <li>Making spreadsheets</li>
            <li>Taking inventory</li>
            <li>Heated debates</li>
          </ul>
        </Col>
        <Col md={5} xl={3}>
          <h5>&#x1f929; New Way</h5>
          <ul>
            <li>Flexible process</li>
            <li>Everyone participates</li>
            <li>Simplicity and transparency</li>
          </ul>
        </Col>
        <Col/>
      </Row>

      <Row className="p-4">
        <Col />
        <Col lg={10} xl={8} xxl={6}>
          <Carousel images={images} height={800} alt="Things screenshot" />
        </Col>
        <Col />
      </Row>

      <Row className="pb-4 center">
        <Col>
          <p style={{ fontSize: "1.5em" }}>
            &#x1f449; <Link href={docsUrl}>Read the manual</Link> &#x1f448;
          </p>
        </Col>
      </Row>
    </Container>
  )
}
