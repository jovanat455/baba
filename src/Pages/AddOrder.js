import './AddOrder.css';
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function AddOrder() {

  return (
    <Container className="AddOrder">
      <Form className='AddOrderForm'>
        <Row>
          <img src={`${process.env.PUBLIC_URL}/assets/images/order.gif`} className="orderImage" alt="takeOrder" />
        </Row>
        <Row>
          <Form.Control placeholder="Username" className="addOrderTextField" />
        </Row>
        <Row>
          <Col>
            <Form.Check type="checkbox" className="addOrderCheck" label="Pohovano belo" />
          </Col>
          <Col>
            <Form.Select aria-label="PortionSize" className="addOrderSelect" defaultValue={2}>
              <option>Portion</option>
              <option value="1">x1</option>
              <option value="2">x2</option>
              <option value="3">x3</option>
              <option value="3">x4</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check type="checkbox" className="addOrderCheck" label="Becarac" />
          </Col>
          <Col>
            <Form.Select aria-label="PortionSize" className="addOrderSelect" defaultValue={2}>
              <option>Portion</option>
              <option value="1">x1</option>
              <option value="2">x2</option>
              <option value="3">x3</option>
              <option value="3">x4</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check type="checkbox" className="addOrderCheck" label="Spanac" />
          </Col>
          <Col>
            <Form.Select aria-label="PortionSize" className="addOrderSelect" defaultValue={2}>
              <option>Portion</option>
              <option value="1">x1</option>
              <option value="2">x2</option>
              <option value="3">x3</option>
              <option value="3">x4</option>
            </Form.Select>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Done
        </Button>
      </Form>
    </Container>
  );
}

export default AddOrder;