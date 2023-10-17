import { Container, Row, Col } from 'react-bootstrap';

export default function () {
  return (
    <Container fluid>
      <Row>
      <Col className="col-lg-4 p-4 p-sm-5 p-lg-4 p-xl-5 green">
          Coming soon
        </Col>
        <Col className="col-lg-4 p-4 p-sm-5 p-lg-4 p-xl-5 red">
        <b>Hearts</b>
        </Col>
        <Col className="col-lg-4 p-4 p-sm-5 p-lg-4 p-xl-5 blue">
          Coming soon
        </Col>
      </Row>
    </Container>
  )
}
