import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

import zaratanPic from "../public/images/zaratan-art.jpg";


export default function () {
  return (
    <Container fluid>
      <Row>
        <Col className="col-lg-4 order-1 order-lg-2 p-4 p-sm-5 p-lg-4 p-xl-5 green">
          <h1 className="center spaced logo" style={{ fontSize: "92px" }}>Zaratan</h1>
          <p className="center spaced rainbow-text-animated" style={{ fontSize: "32px" }}>Find Your Place</p>
          <h1 className="center" style={{ fontSize: "92px" }}>&#x1F422;</h1>
        </Col>
        <Col className="col-lg-4 order-2 order-lg-1 p-4 p-sm-5 p-lg-4 p-xl-5 red">
          <h5>Zaratan is an emerging coliving company in Los Angeles, with a focus on freedom and accountability.</h5>
          <hr></hr>
          <p>We believe that:</p>
          <p>
            <b>Housing</b> is not a luxury good &#x2013;&nbsp;
            <b>Home</b> is a place of safety and freedom &#x2013;&nbsp;
            <b>Community</b> cannot be bought &#x2013;&nbsp;
            <b>Rules</b> don't have to be complicated &#x2013;&nbsp;
            <b>Work</b> should be recognized &#x2013;&nbsp;
            <b>Caring</b> for our enviroment starts at home.
          </p>

          <p>
            We're looking for people who are <b>kind, creative, and playful</b>. We keep prices reasonable, and in return ask members to help with chores &#x2013; we don't have managers or servants.
            Meetings can be boring, so we've <a className="text-reset" href="https://github.com/kronosapiens/mirror"><u>developed tools</u></a> to make running a house as easy as playing a game.
            If you take the responsibility, this will be one of the best experiences of your life.
          </p>
        </Col>
        <Col className="col-lg-4 order-3 order-lg-3 p-4 p-sm-5 p-lg-4 p-xl-5 blue">
            {/* Image Source: https://www.deviantart.com/rowye/art/Turtle-Island-483132909 */}
            <Link href="https://en.wikipedia.org/wiki/Zaratan">
              <Image className="img-fluid img-thumbnail" src={zaratanPic} alt="Image of a Zaratan" style={{ margin: "auto", display: "block", opacity: "0.65"}} />
            </Link>
        </Col>
      </Row>
    </Container>
  )
}
