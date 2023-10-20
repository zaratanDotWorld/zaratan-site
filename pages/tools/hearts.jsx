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

      <Row className="red p-5">
        <Col />
        <Col md={8} xl={6}>
          <b>Hearts</b>
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
