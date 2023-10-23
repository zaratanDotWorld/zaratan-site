import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import Carousel from '../../components/carousel';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';

export async function getStaticProps() {
  const regex = /public\/images\/mirror\/framed-mobile-chores.*\.jpg/i;
  const images = await getImages({ regex });
  return { props: { images } }
}

export default function ({ images }) {
  const installUrl = "https://chores.mirror.zaratan.world/slack/install";
  const manualUrl = "https://github.com/zaratanDotWorld/mirror/wiki/Chores";

  return (
    <Container fluid>
      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
              mainText="Chores"
              subText="Keep It Clean"
              icon="&#x1f9e4;"
              color="green"
            />
            <br></br>
            <SlackButton text="Install Now" url={installUrl} />
        </Col>
        <Col />
      </Row>

      <Row className="accent-green pt-5 px-5">
        <Col />
        <Col md={10} xl={6}>
          <h5><b>Chores is Zaratan's crown jewel</b>, making dirty dishes and passive-aggressive sticky notes a thing of the past.</h5>
          <p>
            Chores is a chore wheel for the 21st century, helping everyone do their part, on their terms.
            Instead of restrictive schedules or inconsistent "bragging boards," people do chores for points.
            Everyone owes 100 points per month, and the longer a chore goes undone, the more points it's worth.
            Folks co-create their list of chores, and they fine-tune priorities so that more points go to more important chores.
          </p>
          <p>
            The system is dynamic and flexible, helping people orient around what they like best.
            The best part? It happens like magic.
          </p>
          <hr></hr>
        </Col>
        <Col />
      </Row>

      <Row className="accent-green pb-5 px-5">
        <Col/>
        <Col md={5} xl={3}>
          <h5>&#x1f62d; Old Way</h5>
          <ul>
            <li>Dirty dishes</li>
            <li>Passive-aggressive notes</li>
            <li>Feeling taken advantage of</li>
            <li>Endless meetings</li>
          </ul>
        </Col>
        <Col md={5} xl={3}>
          <h5>&#x1f929; New Way</h5>
          <ul>
            <li>Clean sinks</li>
            <li>Communication and transparency</li>
            <li>Feeling empowered and appreciated</li>
            <li>Endless flexibility</li>
          </ul>
        </Col>
        <Col/>
      </Row>

      <Row className="p-4">
        <Col />
        <Col lg={10} xl={8} xxl={6}>
          <Carousel images={images} height={800} alt="Chores screenshot" />
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
