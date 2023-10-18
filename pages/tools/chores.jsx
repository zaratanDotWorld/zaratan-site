import { Container, Row, Col } from 'react-bootstrap';

export default function () {
  return (
    <Container fluid>
      <Row className="p-5">
       <Col />
        <Col>
          Coming soon
        </Col>
        <Col />
      </Row>

      <Row className="green p-5">
        <Col />
        <Col className="col-8 col-md-6 col-xl-4">
          <b>Chores</b>
        </Col>
        <Col />
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
