import Link from "next/link";
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';

import { repoUrl, docsUrl, metagovUrl, mailchimpUrl } from '../../utils/constants';

export default function () {
  // const roommateUrl = "https://buy.stripe.com/7sI5lwcjC3FXabKeUW";
  // const familyUrl = "https://buy.stripe.com/fZeaFQ97q3FXabK28b";
  // const communityUrl = "https://buy.stripe.com/dR6g0a4Radgx4Rq8wA";

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
          <h5>Install now</h5>
          <h6>
            <b><Link href="/tools/chores">Chores</Link></b>
            &nbsp;·&nbsp;
            <b><Link href="/tools/hearts">Hearts</Link></b>
            &nbsp;·&nbsp;
            <b><Link href="/tools/things">Things</Link></b>
          </h6>
        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-blue">
        <Col />
        <Col md={8} xl={6}>
          <h5><b>Chore Wheel</b> is pioneering software for co-living, running on Slack.</h5>
          <hr></hr>
          <p>Created by <b>economists</b> and <b>game designers</b>, Chore Wheel is a family of tools helping people share space:</p>
          <ul>
            <li><b><Link href="/tools/chores" className="text-decoration-none">Chores</Link></b> for keeping it clean</li>
            <li><b><Link href="/tools/hearts" className="text-decoration-none">Hearts</Link></b> for mutual accountability</li>
            <li><b><Link href="/tools/things" className="text-decoration-none">Things</Link></b> for bulk purchasing</li>
            <li>And more to come</li>
          </ul>

          <p>Chore Wheel is <b>open-source</b> and <b>privacy-preserving</b>. It contains the latest thinking in <b>ethical technology</b>, with four core principles:</p>
          <ul>
            <li>No managers or privileged roles</li>
            <li>Simple and intuitive inputs</li>
            <li>Humans decide, machines bookkeep</li>
            <li>Always-on, asynchronous processes</li>
          </ul>

          <p>Development was supported by the <b>Open-Source Software</b> (2x), <b>Governance Research</b>, and <b>Metacrisis</b> rounds of <b><Link href="https://grants.gitcoin.co/">Gitcoin Grants</Link></b></p>

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
              {/* <tr>
                <td><Button variant="outline-success" size="sm" href={roommateUrl}>Subscribe</Button></td>
                <td><Button variant="outline-success" size="sm" href={familyUrl}>Subscribe</Button></td>
                <td><Button variant="outline-success" size="sm" href={communityUrl}>Subscribe</Button></td>
              </tr> */}
              {/* <tr>
                <td><SlackButton appName="Chores" installUrl={choresUrl} /></td>
                <td><SlackButton appName="Hearts" installUrl={heartsUrl} /></td>
                <td><SlackButton appName="Things" installUrl={thingsUrl} /></td>
              </tr> */}
            </tbody>
          </Table>
        </Col>
        <Col />
      </Row>
    </Container>
  )
}
