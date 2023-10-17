import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

import zaratanPic from "../public/images/zaratan-art.jpg";

function SignupForm () {
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
          <input type="email" defaultValue="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="~ email address ~" required></input>
          <br></br>
          <br></br>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
            <input type="text" name="b_7176b8b238db3ff30396bf211_f82230a866" tabIndex="-1" defaultValue=""></input>
          </div>
          <div className="clear">
            <input type="submit" value="Join the waitlist" name="subscribe" id="mc-embedded-subscribe" className="button"></input>
          </div>
        </div>
      </form>
    </div>
  )
}

export default function () {
  return (
    <Container fluid>
      <Row>
        <Col className="col-lg-4 order-1 order-lg-2 p-4 p-sm-5 p-lg-4 p-xl-5 green">
          <h1 className="center spaced logo" style={{ fontSize: "92px" }}>Zaratan</h1>
          <p className="center spaced rainbow-text-animated" style={{ fontSize: "32px" }}>Find Your Place</p>
          <h1 className="center" style={{ fontSize: "92px" }}>&#x1F422;</h1>
          <br></br>
          <SignupForm></SignupForm>
        </Col>
        <Col className="col-lg-4 order-2 order-lg-1 p-4 p-sm-5 p-lg-4 p-xl-5 red">
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
        <Col className="col-lg-4 order-3 order-lg-3 p-4 p-sm-5 p-lg-4 p-xl-5 blue">
            {/* Image Source: https://www.deviantart.com/rowye/art/Turtle-Island-483132909 */}
            <Link href="https://en.wikipedia.org/wiki/Zaratan">
              <Image
                className="rounded border border-3"
                src={zaratanPic}
                alt="Image of a Zaratan"
                width={320}
                height={400}
                style={{ margin: "auto", display: "block", opacity: "0.75"}}
              />
            </Link>
        </Col>
      </Row>
    </Container>
  )
}
