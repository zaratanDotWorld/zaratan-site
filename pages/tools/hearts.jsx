import Link from 'next/link';
import Image from 'next/image';

import { Container, Row, Col, Carousel } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';

export async function getStaticProps() {
  const regex = /public\/images\/mirror\/hearts.*\.jpg/i;
  const images = await getImages({ regex });
  return { props: { images } }
}

export default function ({ images }) {
  const installUrl = "https://slack.com/oauth/v2/authorize?client_id=1003435112487.4076729845777" +
    "&scope=channels:history,channels:read,chat:write,commands,reactions:write,users:read,channels:join&user_scope=";
  const manualUrl = "https://github.com/zaratanDotWorld/mirror/wiki/Hearts";

  return (
    <Container fluid>
      <Row className="p-5 center">
       <Col />
        <Col>
          <Headpiece
              mainText="Hearts"
              subText="Keeping It Honest"
              icon="&#x1f496;"
              scale={25}
            />
            <br></br>
            <SlackButton text="Install Now" url={installUrl} />
        </Col>
        <Col />
      </Row>

      <Row className="red pt-5 px-5">
        <Col />
        <Col md={10} xl={6}>
          <h5><b>Hearts is Zaratan's accountability tool</b>, helping people establish mutual expectations and work through conflicts.</h5>
          <p>
            Hearts provides a way to hold people accountable to shared commitments, while putting growth and forgiveness front-and-center.
            If conflicts arise (as they inevitably will), and folks are unable to work things out between themselves,
            Hearts can support a fair resolution.
            Folks lose hearts if they skimp on chores, but automatically earn them back over time.
            You can also give "karma" to people who go above-and-beyond, which earns them bonus hearts.
          </p>
          <hr></hr>
        </Col>
        <Col />
      </Row>

      <Row className="red pb-5 px-5">
        <Col/>
        <Col md={5} xl={3}>
          <h5>&#x1f62d; Old Way</h5>
          <ul>
            <li>Holding grudges</li>
            <li>Petty politics</li>
            <li>Selfish behaviors</li>
            <li>Feeling silenced</li>
          </ul>
        </Col>
        <Col md={5} xl={3}>
          <h5>&#x1f929; New Way</h5>
          <ul>
            <li>Forgiveness over time</li>
            <li>Clear process</li>
            <li>Respect and acknowledgment</li>
            <li>Feeling heard</li>
          </ul>
        </Col>
        <Col/>
      </Row>

      <Row className="p-5">
        <Col />
        <Col lg={5} xl={4} className="p-3">
          <Carousel interval={3600} variant="dark">
              {
                images.map((imageUri, i) =>
                  <Carousel.Item key={i}>
                    <Image
                      className="rounded border border-3"
                      src={imageUri}
                      alt={imageUri}
                      width={316}
                      height={560}
                      style={{ margin: "auto", display: "block" }}
                    />
                  </Carousel.Item>
                )
              }
            </Carousel>
        </Col>
        <Col lg={5} xl={4} className="p-3">
          <Carousel interval={3600} variant="dark">
              {
                images.reverse().map((imageUri, i) =>
                  <Carousel.Item key={i}>
                    <Image
                      className="rounded border border-3"
                      src={imageUri}
                      alt={imageUri}
                      width={316}
                      height={560}
                      style={{ margin: "auto", display: "block" }}
                    />
                  </Carousel.Item>
                )
              }
            </Carousel>
        </Col>
        <Col />
      </Row>

      <Row className="pb-4 center">
        <Col>
          <p style={{ fontSize: "30px" }}>
            &#x1f449; <Link href={manualUrl}>Read the manual</Link> &#x1f448;
          </p>
        </Col>
      </Row>
    </Container>
  )
}
