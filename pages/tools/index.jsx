import { S3 } from "@aws-sdk/client-s3";
import Image from 'next/image';
import Link from "next/link";
import { Container, Row, Col, Table, Button, Carousel } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';

export async function getStaticProps() {
  const s3 = new S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY
    }});

    const { Contents } = await s3.listObjects({ Bucket: "zaratan.world" });
    const cdnRoot = "https://d3gacl6pm59h8m.cloudfront.net/"
    const regex = /public\/images\/mirror\/.*\.jpg/i;

    const images = Contents
      .filter(item => regex.test(item.Key))
      .map(item => cdnRoot + item.Key)

  return { props: { images } }
}

export default function ({ images }) {
  const roommateUri = "https://buy.stripe.com/7sI5lwcjC3FXabKeUW";
  const familyUri = "https://buy.stripe.com/fZeaFQ97q3FXabK28b";
  const communityUri = "https://buy.stripe.com/dR6g0a4Radgx4Rq8wA";
  const choresUri = "https://slack.com/oauth/v2/authorize?client_id=1003435112487.1005562872163&scope=channels:history,channels:join,channels:read,chat:write,commands,users:read&user_scope=";
  const heartsUri = "https://slack.com/oauth/v2/authorize?client_id=1003435112487.4076729845777&scope=channels:history,channels:read,chat:write,commands,reactions:write,users:read,channels:join&user_scope=";
  const thingsUri = "https://slack.com/oauth/v2/authorize?client_id=1003435112487.4220243134688&scope=channels:history,channels:join,channels:read,chat:write,commands,users:read&user_scope=";

  return (
    <Container fluid>
      <Row className="p-5">
        <Col />
        <Col>
        <Headpiece
            mainText="Tools"
            subText="Make It Work"
            icon="&#x1f4a0;"
            scale={25}
          />
          <br></br>
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
        <Col />
      </Row>

      <Row className="p-5 blue">
        <Col />
        <Col md={8} xl={6}>
          <h5>Zaratan builds pioneering software for co-living, running on Slack.</h5>
          <hr></hr>
          <p>Developed by <b>economists and game designers</b>, Zaratan creates tools to help people share space:</p>
          <ul>
            <li><b>Chores</b> for keeping it clean</li>
            <li><b>Hearts</b> for mutual accountability</li>
            <li><b>Things</b> for bulk purchasing</li>
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
            <Link href="https://archive.org/details/kronovet-metagov-20230329">Watch the talk</Link>
          </div>
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col>
          <div className="center">
            <h2>Pricing</h2>
            <p style={{ fontSize: "16px" }}><s>All plans come with a 90-day free trial</s><br></br><b>All plans are currently free</b></p>
            <Table className="table center" hover responsive>
              <thead>
                <tr><th>Roommate</th><th>Family</th><th>Community</th></tr>
              </thead>
              <tbody style={{ fontSize: "16px" }}>
                <tr><td>For groups of friends</td><td>For groups with shared values</td><td>For large groups sharing resources</td></tr>
                <tr><td>Chores</td><td>Chores, Hearts</td><td>All apps</td></tr>
                <tr><td>Up to 5 users</td><td>Up to 10 users</td><td>Up to 20 users</td></tr>
                <tr><td><s>$20/mo</s></td><td><s>$40/mo</s></td><td><s>$60/mo</s></td></tr>
                {/* <tr>
                  <td><Button variant="outline-success" size="sm" href={roommateUri}>Subscribe</Button></td>
                  <td><Button variant="outline-success" size="sm" href={familyUri}>Subscribe</Button></td>
                  <td><Button variant="outline-success" size="sm" href={communityUri}>Subscribe</Button></td>
                </tr> */}
                {/* <tr>
                  <td><SlackButton appName="Chores" installUrl={choresUri} /></td>
                  <td><SlackButton appName="Hearts" installUrl={heartsUri} /></td>
                  <td><SlackButton appName="Things" installUrl={thingsUri} /></td>
                </tr> */}
              </tbody>
            </Table>
            <p>Coming soon...</p>
            <Button variant="outline-success" size="md" href="https://mailchi.mp/a69de84158a5/app-interest">Get updates</Button>
          </div>
        </Col>
        <Col />
      </Row>
    </Container>
  )
}

export function SlackButton({ appName, installUrl }) {
  return (
    <a href={installUrl} style={{
      alignItems:"center",
      color:"#000",
      backgroundColor:"#fff",
      border:"1px solid #ddd",
      borderRadius:"4px",
      display:"inline-flex",
      fontSize:"14px",
      height:"36px",
      textDecoration:"none",
      width:"104px"
    }}>
    <svg xmlns="http://www.w3.org/2000/svg" style={{height:"16px", width:"16px", marginLeft:"6px", marginRight:"6px"}} viewBox="0 0 122.8 122.8">
      <path d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z" fill="#e01e5a"></path>
      <path d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z" fill="#36c5f0"></path>
      <path d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z" fill="#2eb67d"></path>
      <path d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z" fill="#ecb22e"></path>
    </svg>
      Get {appName}
    </a>
  )
}
