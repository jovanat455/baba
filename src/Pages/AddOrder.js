import './AddOrder.css';
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";

function AddOrder() {

  return (
    <Container className="AddOrder p-3">
      <Form className='AddOrderForm'>
        <Form.Group className="mb-3">
          <Image src={`${process.env.PUBLIC_URL}/assets/images/order.gif`} className="orderImage" alt="takeOrder" fluid/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control placeholder="Username" className="addOrderTextField" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Row className="mb-3">
            <Col>
              <Form.Check type="checkbox" className="addOrderCheck" label="Pohovano belo" />
            </Col>
            <Col>
              <Form.Select aria-label="PortionSize" size='sm' className="addOrderSelect" defaultValue={2}>
                <option>Portion</option>
                <option value="1">x1</option>
                <option value="2">x2</option>
                <option value="3">x3</option>
                <option value="3">x4</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Check type="checkbox" className="addOrderCheck" label="Becarac" />
            </Col>
            <Col>
              <Form.Select aria-label="PortionSize" size='sm' className="addOrderSelect" defaultValue={2}>
                <option>Portion</option>
                <option value="1">x1</option>
                <option value="2">x2</option>
                <option value="3">x3</option>
                <option value="3">x4</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Check type="checkbox" className="addOrderCheck" label="Spanac" />
            </Col>
            <Col>
              <Form.Select aria-label="PortionSize" size='sm' className="addOrderSelect" defaultValue={2}>
                <option>Portion</option>
                <option value="1">x1</option>
                <option value="2">x2</option>
                <option value="3">x3</option>
                <option value="3">x4</option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>

        <button variant="primary" type="submit" className="rgbButton">
          Done
        </button>
      </Form>
    </Container>
  );
}

export default AddOrder;