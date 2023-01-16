import './AddOrder.css';
import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const viewOrderApi = "https://babadb20221229134825.azurewebsites.net/api/GetAllActivetOrders?code=YPa88ZCdXF1jwWP7rGQFb7ecUy5Opw-YayM2nMS31pbGAzFu1DBOdg==&StringCorrect=1"

const ViewOrder = () => {
  const [order, setOrders] = useState();

  useEffect(() => {
    async function fetchData() {
      let result = await axios.get(viewOrderApi);
      setOrders(result.data);
    }
    fetchData();
  }, []);

  console.log(order);

  const getOrder = (order) => {
    let report = order.Name + ': ' + "\n";
    let itemList = order.OrderedItems;
    for (let i = 0; i < itemList.length; i++) {
      report = report + itemList[i].MealName + '(' + itemList[i].Amount + ')' + "\n";
    }
    return report;
  }

  return (
    <Container className="AddOrder p-3">
      <h1 className="mb-3">View current order</h1>
      <Form className='ViewOrderForm'>
        <Form.Group className="mb-3" name="orderForm">
          {order &&
            order.map((item) => (
              <div key={item.Name}>
                <Row className="mb-3">
                  <Col className='d-flex justify-content-center'>
                    <Form.Check type="checkbox" className="addOrderCheck" label={getOrder(item)} name={"check_" + item.Name} />
                  </Col>
                </Row>
              </div>
            ))}
        </Form.Group>
      </Form>
    </Container>
  );
}

export default ViewOrder;