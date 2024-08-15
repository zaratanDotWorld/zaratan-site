import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import Carousel from '../../components/carousel';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';
import { docsUrl, heartsInstallUrl } from '../../utils/constants';

export async function getStaticProps() {
  const regex = /public\/images\/mirror\/framed-mobile-hearts.*\.jpg/i;
  const images = await getImages({ regex });
  return { props: { images } }
}

export default function ({ images }) {
  return (
    <Container fluid>
      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
              mainText="Hearts"
              subText="Keep It Honest"
              icon="&#x1f496;"
              color="red"
            />
            <br></br>
            <SlackButton text="Install Now" url={heartsInstallUrl} />
        </Col>
        <Col />
      </Row>

      <Row className="accent-red pt-5 px-5">
        <Col />
        <Col md={10} xl={6}>
          <h5><b>Hearts is Zaratan's accountability tool</b>, helping people establish mutual expectations and work through conflicts.</h5>
          <p>
            Hearts helps hold people accountable to shared commitments, while putting growth and forgiveness front-and-center.
            When conflicts arise, and folks are unable to work things out amongst themselves, the system can support a fair resolution.
          </p>
          <p>
            People lose hearts for not doing chores, but earn them back over time.
            You give good karma to folks going the extra mile, earning them bonus hearts.
          </p>
          <hr></hr>
        </Col>
        <Col />
      </Row>

      <Row className="accent-red pb-5 px-5">
        <Col/>
        <Col md={5} xl={3}>
          <h5>&#x1f62d; Old Way</h5>
          <ul>
            <li>Holding grudges</li>
            <li>Cliques and pettiness</li>
            <li>Selfish behaviors</li>
            <li>Feeling silenced</li>
          </ul>
        </Col>
        <Col md={5} xl={3}>
          <h5>&#x1f929; New Way</h5>
          <ul>
            <li>Clear process</li>
            <li>Respect and acknowledgment</li>
            <li>Forgiveness over time</li>
            <li>Feeling heard</li>
          </ul>
        </Col>
        <Col/>
      </Row>

      <Row className="p-4">
        <Col />
        <Col lg={10} xl={8} xxl={6}>
          <Carousel images={images} height={800} alt="Hearts screenshot" />
        </Col>
        <Col />
      </Row>

      <Row className="pb-4 center">
        <Col>
          <p style={{ fontSize: "1.5em" }}>
            &#x1f449; <Link href={docsUrl}>Read the docs</Link> &#x1f448;
          </p>
        </Col>
      </Row>
    </Container>
  )
}
