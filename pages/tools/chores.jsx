import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';

export default function () {
  return (
    <Container fluid>
      <Row className="p-5">
       <Col />
        <Col>
          <Headpiece
              mainText="Chores"
              subText="Keeping It Clean"
              icon="&#x1f9e4;"
              scale={25}
            />
        </Col>
        <Col />
      </Row>

      <Row className="green pt-5 px-5">
        <Col />
        <Col md={10} xl={6}>
          <h5><b>Chores is Zaratan's crown jewel</b>, making dirty dishes and passive-aggressive sticky notes a thing of the past.</h5>
          <hr></hr>
        </Col>
        <Col />
      </Row>

      <Row className="green pb-5 px-5">
        <Col/>
        <Col md={5} xl={3}>
          <h5>Old Way</h5>
          <ul>
            <li>Dirty dishes</li>
            <li>Passive-aggressive sticky notes</li>
            <li>Feeling taken advantage of</li>
            <li>Endless meetings</li>
          </ul>
        </Col>
        <Col md={5} xl={3}>
          <h5>New Way</h5>
          <ul>
            <li>Clean sinks</li>
            <li>Communication and transparency</li>
            <li>Feeling empowered and appreciated</li>
            <li>Tremendous flexibility</li>
          </ul>
        </Col>
        <Col/>
      </Row>

      <Row className="p-5">
        <Col />
        <Col>
          Coming soon
        </Col>
        <Col />
      </Row>
    </Container>
  )
}
