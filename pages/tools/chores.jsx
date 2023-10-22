import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import IPhoneCarousel from '../../components/carousel';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';

export async function getStaticProps() {
  const regex = /public\/images\/mirror\/framed-mobile-chores.*\.png/i;
  const images = await getImages({ regex });
  return { props: { images } }
}

export default function ({ images }) {
  const installUrl = "https://slack.com/oauth/v2/authorize?client_id=1003435112487.1005562872163" +
    "&scope=channels:join,chat:write,commands,users:read&user_scope=";
  const manualUrl = "https://github.com/zaratanDotWorld/mirror/wiki/Chores";

  return (
    <Container fluid>
      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
              mainText="Chores"
              subText="Keeping It Clean"
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
            Chores is a chore wheel for the 21st century, ensuring everyone does their part, on their terms.
            Instead of restrictive chore schedules or ineffective "bragging boards," chores are worth points.
            Everyone owes 100 points per month, and the longer a chore goes undone, the more points it's worth.
          </p>
          <p>
            Folks co-create their list of chores, and they fine-tune the priorities so more points go to more important chores.
            The Chores system is dynamic and flexible, letting people gravitate towards the work they like best.
            The best part? It all happens like magic.
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
            <li>Passive-aggressive sticky notes</li>
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
        <Col lg={5} xl={4}>
          <IPhoneCarousel images={images} />
        </Col>
        <Col lg={5} xl={4}>
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
