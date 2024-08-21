import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import Carousel from '../../components/carousel';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';
import { quickstartUrl, thingsInstallUrl } from '../../utils/constants';

export async function getStaticProps() {
  const regex = /public\/images\/mirror\/framed-mobile-things.*\.jpg/i;
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
              mainText="Things"
              subText="Shopping Made Easier"
              icon="&#x1f6d2;"
              color="blue"
            />
            <br></br>
            <SlackButton text="Install Now" url={thingsInstallUrl} />
        </Col>
        <Col />
      </Row>

      <Row className="accent-blue pt-5 px-5">
        <Col />
        <Col md={10} xl={6}>
          <h5><b>Things is Chore Wheel's spending system</b>, helping people manage shared funds.</h5>
          <p>
            Things lets folks co-create a list of shared staples.
            When supplies run low, anyone can buy more.&nbsp;
            <b>Effortlessly keep things stocked</b>, without putting it all on one person.
          </p>

          <p>
            Help your house run itself. <Link className="text-decoration-none" href={quickstartUrl}>Get started today.</Link> &#x2728;
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
    </Container>
  )
}
