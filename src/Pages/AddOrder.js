import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AddOrder() {
  return (
    <div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/order.gif`} className="orderImage" alt="takeOrder" />
        <Form>
        <Form.Control placeholder="Username" />
        <Form.Group controlId="menuItems">
            <Form>
                <Row>
                    <Col>
                        <Form.Check type="checkbox" className="addOrderCheck" label="Pohovano belo" />
                    </Col>
                    <Col>
                    <Form.Select aria-label="PortionSize" value={2}>
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
                        <Form.Check type="checkbox" className="addOrderCheck" label="Becarac"/>
                    </Col>
                    <Col>
                    <Form.Select aria-label="PortionSize" value={2}>
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
                    <Form.Select aria-label="PortionSize" value={2}>
                        <option>Portion</option>
                        <option value="1">x1</option>
                        <option value="2">x2</option>
                        <option value="3">x3</option>
                        <option value="3">x4</option>
                    </Form.Select>
                    </Col>
                </Row>
            </Form>
        </Form.Group>
        <Button variant="primary" type="submit">
            Done
        </Button>
        </Form>
    </div>
  );
}

export default AddOrder;