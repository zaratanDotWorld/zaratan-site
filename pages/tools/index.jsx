import Link from "next/link";
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';

export default function () {
  // const roommateUrl = "https://buy.stripe.com/7sI5lwcjC3FXabKeUW";
  // const familyUrl = "https://buy.stripe.com/fZeaFQ97q3FXabK28b";
  // const communityUrl = "https://buy.stripe.com/dR6g0a4Radgx4Rq8wA";
  const mailchimpUrl = "https://mailchi.mp/a69de84158a5/app-interest";

  return (
    <Container fluid>
      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
         <Headpiece
            mainText="Tools"
            subText="Making It Work"
            icon="&#x1f4a0;"
          />

          <br></br>
          <p>Currently in <b>beta</b>, but nearly ready...</p>
          <Button variant="outline-success" size="md" href={mailchimpUrl}>Join the waitlist</Button>
        </Col>
        <Col />
      </Row>

      <Row className="p-5 blue">
        <Col />
        <Col md={8} xl={6}>
          <h5>Zaratan builds pioneering software for co-living, running on Slack.</h5>
          <hr></hr>
          <p>Developed by <b>economists and game designers</b>, Zaratan creates tools to help people share space:</p>
          <ul>
            <li><b><Link href="/tools/chores" className="text-decoration-none">Chores</Link></b> for keeping it clean</li>
            <li><b><Link href="/tools/hearts" className="text-decoration-none">Hearts</Link></b> for mutual accountability</li>
            <li><b><Link href="/tools/things" className="text-decoration-none">Things</Link></b> for bulk purchasing</li>
            <li>And more to come</li>
          </ul>

          <p>These tools contain the latest thinking in <b>ethical technology</b>, with four core principles:</p>
          <ul>
            <li>No managers or privileged roles</li>
            <li>Simple and intuitive inputs</li>
            <li>Humans decide, machines bookkeep</li>
            <li>Always-on, asynchronous processes</li>
          </ul>

          <br></br>
          <div className="center">
            <Link href="https://archive.org/details/kronovet-metagov-20230329"><b>Watch the talk</b></Link>
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
