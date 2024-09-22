import Link from "next/link";
import { Alert, Container, Row, Col, Table, Button } from 'react-bootstrap';

import Carousel from '../../components/carousel';
import Headpiece from '../../components/headpiece';
import Video from '../../components/video';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';
import {
  repoUrl,
  docsUrl,
  interestUrl,
  quickstartUrl,
  metagovUrl,
  choreWheelUrl,
  structuresUrl,
  choresInstallUrl,
  heartsInstallUrl,
  thingsInstallUrl,
} from '../../utils/constants';

export async function getStaticProps() {
  const regex = /public\/images\/mirror\/framed-mobile-.*\.jpg/i;

  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const images = (await getImages({ regex }))
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return { props: { images } }
}

export default function ({ images }) {
  return (
    <Container fluid>
      <br></br>
      <Alert variant="success" className="center" dismissible>
        Read our <Alert.Link href={structuresUrl}>peer-reviewed case study</Alert.Link> of Chore Wheel and Sage House
      </Alert>

      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
         <Headpiece
            mainText="Chore Wheel"
            subText="Community Made Easier"
            // icon="☀️"
            icon="&#x1F506;"
            color="blue"
          />

          <br></br>

          <p>
            <i>"Far more practical and functional than [what] I've experienced in group living before."</i>
            <br></br>
            <b>- Molly B.</b>
          </p>

          <br></br>

          <Button variant="outline-primary" size="md" href={quickstartUrl}>Get Started</Button>

          <br></br>
          <br></br>

          <Video videoSrc={choreWheelUrl} videoType={"video/mp4"} />
        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-blue">
        <Col />
        <Col md={8} xl={6}>
          <h5>
            <b>Chore Wheel</b> is <Link className="text-decoration-none" href={structuresUrl}>pioneering software for coliving</Link>, helping communities thrive.
          </h5>

          <hr></hr>
          <p>
            Created by <b>coliving veterans</b> and <b>game designers</b>, Chore Wheel is a family of <b>Slack apps</b> helping people share space:
          </p>
          <ul>
            <li><b><Link className="text-decoration-none" href="/chorewheel/chores">Chores</Link></b> for keeping it clean</li>
            <li><b><Link className="text-decoration-none" href="/chorewheel/hearts">Hearts</Link></b> for mutual accountability</li>
            <li><b><Link className="text-decoration-none" href="/chorewheel/things">Things</Link></b> for group purchasing</li>
            <li>And more to come...</li>
          </ul>

          <p>
            Designed for <b>intentional communities</b>, <b>casual roommates</b>, <b>cohabitating partners</b>, and everything in-between,
            Chore Wheel helps people share the <b>emotional and mental labor</b> of sustaining communities.
            Groups using Chore Wheel have <b>fewer meetings</b> and <b>less conflict</b>, leaving more time for what really matters.
          </p>

          <p>
            <b>The best part? It's fun to use. <Link className="text-decoration-none" href={quickstartUrl}>Get started today.</Link> &#x2728;</b>
          </p>

          <p>
            Not sure if Chore Wheel is right for you? <Link href={interestUrl} className="text-decoration-none"><b>Fill out this form</b></Link> and someone will be in touch.
          </p>

          <p>
            <i>
              Development of Chore Wheel was supported by the&nbsp;
              <b>Open-Source Software</b> (2x), <b>Governance Research</b>, and <b>Metacrisis</b> rounds of&nbsp;
              <b><Link className="text-decoration-none" href="https://grants.gitcoin.co/">Gitcoin Grants</Link></b>.
            </i>
          </p>

          <div className="center">
            <Link href={metagovUrl}>Watch the talk</Link>
            &nbsp;·&nbsp;
            <Link href={repoUrl}>See the code</Link>
            &nbsp;·&nbsp;
            <Link href={docsUrl}>Read the docs</Link>
          </div>
        </Col>
        <Col />
      </Row>

      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
        <Carousel images={images} height={800} alt="Chores screenshot" />
        {/* <Pricing /> */}
        </Col>
        <Col />
      </Row>
    </Container>
  )
}

export function Pricing() {
  const roommateUrl = "https://buy.stripe.com/7sI5lwcjC3FXabKeUW";
  const familyUrl = "https://buy.stripe.com/fZeaFQ97q3FXabK28b";
  const communityUrl = "https://buy.stripe.com/dR6g0a4Radgx4Rq8wA";

  return (
    <div>
      <h2>Pricing</h2>
      <p><s>All plans come with a 90-day trial</s><br></br><b>All plans are currently free</b></p>
      <Table hover responsive>
        <thead>
          <tr><th>Roommate</th><th>Family</th><th>Community</th></tr>
        </thead>
        <tbody>
          <tr><td>For groups of friends</td><td>For groups with shared values</td><td>For large groups sharing resources</td></tr>
          <tr><td>Chores</td><td>Chores, Hearts</td><td>All apps</td></tr>
          <tr><td>Up to 5 users</td><td>Up to 10 users</td><td>Up to 20 users</td></tr>
          <tr><td><s>$20/mo</s></td><td><s>$40/mo</s></td><td><s>$60/mo</s></td></tr>
          <tr>
            <td><Button variant="outline-success" size="sm" href={roommateUrl}>Subscribe</Button></td>
            <td><Button variant="outline-success" size="sm" href={familyUrl}>Subscribe</Button></td>
            <td><Button variant="outline-success" size="sm" href={communityUrl}>Subscribe</Button></td>
          </tr>
          <tr>
            <td><SlackButton text="Get Chores" installUrl={choresInstallUrl} /></td>
            <td><SlackButton text="Get Hearts" installUrl={heartsInstallUrl} /></td>
            <td><SlackButton text="Get Things" installUrl={thingsInstallUrl} /></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
