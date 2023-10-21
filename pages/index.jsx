import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../components/headpiece';
import zaratanPic from "../public/images/zaratan-art.jpg";

export default function () {
  return (
    <Container fluid>
      <Row className="p-5">
        <Col />
        <Col>
          <Headpiece
            mainText="Zaratan"
            subText="Find Your Place"
            icon="&#x1F422;"
            scale={35}
          />

          <br></br>
          <SignupForm text="Come on in" placeholder="~ email address ~" />
        </Col>
        <Col />
      </Row>
      <Row className="green p-5">
        <Col />
        <Col md={8} xl={6}>
          <h5>Zaratan is an emerging coliving company in Los Angeles. We build physical houses and pioneering software tools.</h5>
          <hr></hr>
          <p>We believe that:</p>
          <p>
            <b>Housing</b> is not a luxury &#x2013;&nbsp;
            <b>Home</b> is a place of safety and freedom &#x2013;&nbsp;
            <b>Community</b> cannot be bought &#x2013;&nbsp;
            <b>Rules</b> can be simple &#x2013;&nbsp;
            <b>Work</b> should be valued &#x2013;&nbsp;
            <b>Conservation</b> starts at home.
          </p>

          <p>
            We're looking for people who are <b>kind, creative, and reliable</b>. We keep prices reasonable, and in return ask members to help with chores &#x2013; we don't have managers or cleaners.
            Meetings can be boring, so we made tools to make running a house as easy as playing a game.
            If you can handle the freedom, this could be one of the best experiences of your life.
          </p>
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col>
            {/* Image Source: https://www.deviantart.com/rowye/art/Turtle-Island-483132909 */}
            <Link href="https://en.wikipedia.org/wiki/Zaratan">
              <Image
                className="rounded border border-3"
                src={zaratanPic}
                alt="Image of a Zaratan"
                width={320}
                height={400}
                style={{ margin: "auto", display: "block", opacity: "0.85"}}
              />
            </Link>
        </Col>
        <Col />
      </Row>
    </Container>
  )
}

function SignupForm ({ text, placeholder }) {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://github.us18.list-manage.com/subscribe/post?u=7176b8b238db3ff30396bf211&amp;id=f82230a866"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder={placeholder} required></input>
          <br></br>
          <br></br>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
            <input type="text" name="b_7176b8b238db3ff30396bf211_f82230a866" tabIndex="-1" defaultValue=""></input>
          </div>
          <div className="clear">
            <input type="submit" value={text} name="subscribe" id="mc-embedded-subscribe" className="button"></input>
          </div>
        </div>
      </form>
    </div>
  )
}
