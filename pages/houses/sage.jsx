import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Image from 'next/image';

import sage1 from "../../public/images/houses/sage/front.jpg";
import sage2 from "../../public/images/houses/sage/living.jpg";
import sage3 from "../../public/images/houses/sage/halloween.jpg";

export default function () {
  return (
    <Container fluid>
      <Row>
        <Col className="col-lg-4 order-1 order-lg-2 p-4 p-sm-5 p-lg-4 p-xl-5 green">
          <h1 className="center spaced logo" style={{fontSize: "78px"}}>Sage House</h1>
          <h1 className="center" style={{fontSize: "60px"}}>&#x1F331;</h1>

          <br></br>

          <p>
            A gorgeous ten-bedroom craftsman in the heart of vibrant Highland Park.
            Built in 1905 and recently renovated, this home features a
            restaurant-style kitchen, wood-paneled dining room, sunny living room, quiet library,
            second-floor deck, front vegetable garden, large backyard, and four full bathrooms.
          </p>

          <p className="center spaced rainbow-text-animated" style={{fontSize: "32px"}}>Now Open!</p>
        </Col>
        <Col className="col-lg-4 order-2 order-lg-1 p-4 p-sm-5 p-lg-4 p-xl-5 red">
          <table className="table center">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Sage</th>
                <th scope="col">Craiglist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Rent</th>
                <td>$1100*</td>
                <td>$1050</td>
              </tr>
              <tr>
                <th scope="row">Utilities</th>
                <td>Included</td>
                <td>$60</td>
              </tr>
              <tr>
                <th scope="row">Supplies</th>
                <td>Included</td>
                <td>$40</td>
              </tr>
              <tr>
                <th scope="row">Food Staples</th>
                <td>Included</td>
                <td>$60</td>
              </tr>
              <tr>
                <th scope="row">Internet</th>
                <td>Included</td>
                <td>$40</td>
              </tr>
              <tr>
                <th scope="row">Total</th>
                <td>$1100</td>
                <td>$1250</td>
              </tr>
            </tbody>
          </table>

          <p className="center">*Pricing varies by room</p>
        </Col>
        <Col className="col-lg-4 order-3 order-lg-3 p-4 p-sm-5 p-lg-4 p-xl-5 blue">
        <Carousel>
          <Carousel.Item><Image className="img-thumbnail d-block w-100" src={sage1} /></Carousel.Item>
          <Carousel.Item><Image className="img-thumbnail d-block w-100" src={sage2} /></Carousel.Item>
          <Carousel.Item><Image className="img-thumbnail d-block w-100" src={sage3} /></Carousel.Item>
        </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
