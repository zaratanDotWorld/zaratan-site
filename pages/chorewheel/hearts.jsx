import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import Carousel from '../../components/carousel';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';
import { quickstartUrl, heartsInstallUrl } from '../../utils/constants';

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
              subText="Vibes Made Easier"
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
          <h5><b>Hearts is Chore Wheel's accountability system</b>, helping people establish expectations, recognize contributions, and resolve conflicts.</h5>
          <p>
            Hearts helps hold people accountable to shared commitments, while encouraging sponteneity, and centering personal growth.
            Hearts <b>supercharges bragging boards</b>, and supports fair and transparent resolution to interpersonal conflicts.
          </p>

          <p>
            Make accountability fun and easy. <Link className="text-decoration-none" href={quickstartUrl}>Get started today.</Link> &#x2728;
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
            <li>Fun and engagement</li>
            <li>Respect and validation</li>
            <li>Feeling seen</li>
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
    </Container>
  )
}
