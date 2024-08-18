import Link from "next/link";
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

import Carousel from '../../components/carousel';
import Headpiece from '../../components/headpiece';
import Video from '../../components/video';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';
import {
  repoUrl,
  docsUrl,
  gettingStartedUrl,
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
      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
         <Headpiece
            mainText="Chore Wheel"
            subText="Keep it Going"
            // icon="☀️"
            icon="&#x1F506;"
            color="blue"
          />

          <br></br>
          <p>Currently in <b>open beta</b></p>
          <h5>&#x2728;&nbsp;<Link href={gettingStartedUrl}>Get started now!</Link>&nbsp;&#x2728;</h5>

          <br></br>

          <Video videoSrc={choreWheelUrl} videoType={"video/mp4"} />
        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-blue">
        <Col />
        <Col md={8} xl={6}>
          <h5><b>Chore Wheel</b> is <Link className="text-decoration-none" href={structuresUrl}>pioneering software for co-living</Link>, running on Slack.</h5>
          <hr></hr>
          <p>Created by <b>economists</b> and <b>game designers</b>, Chore Wheel is a family of tools helping people share space:</p>
          <ul>
            <li><b><Link className="text-decoration-none" href="/tools/chores">Chores</Link></b> for keeping it clean</li>
            <li><b><Link className="text-decoration-none" href="/tools/hearts">Hearts</Link></b> for mutual accountability</li>
            <li><b><Link className="text-decoration-none" href="/tools/things">Things</Link></b> for bulk purchasing</li>
            <li>And more to come</li>
          </ul>

          <p>
            Chore Wheel is <b>open-source</b> and <b>privacy-preserving</b>.
            It contains <Link className="text-decoration-none" href={structuresUrl}>the latest thinking</Link> in <b>ethical technology</b>, with four core principles:
          </p>

          <ul>
            <li>No managers or privileged roles</li>
            <li>Simple and intuitive inputs</li>
            <li>Humans for sensing, machines for bookkeeping</li>
            <li>Always-on, asynchronous processes</li>
          </ul>

          <p>
            Development was supported by the&nbsp;
            <b>Open-Source Software</b> (2x), <b>Governance Research</b>, and <b>Metacrisis</b> rounds of&nbsp;
            <b><Link className="text-decoration-none" href="https://grants.gitcoin.co/">Gitcoin Grants</Link></b>.
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
