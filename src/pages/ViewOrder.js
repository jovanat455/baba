import './AddOrder.css';
import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

const viewOrderApi = "https://babadb20221229134825.azurewebsites.net/api/GetAllActivetOrders?code=YPa88ZCdXF1jwWP7rGQFb7ecUy5Opw-YayM2nMS31pbGAzFu1DBOdg==&StringCorrect=1"

function ViewOrder() {
  const [order, setOrders] = useState(null);
  const [orderLoaded, setOrderLoaded] = useState(false);

  const loadOptions = async (event) => {
    if (!orderLoaded) {
      event.preventDefault();

      let orders = await axios.get(viewOrderApi);
      setOrders(orders.data);

      setOrderLoaded(true);
    }
  }

  const getOrder = (order) =>{
    let report = order.Name + ': ' + "\n";
    let itemList = order.OrderedItems;
    for(let i = 0; i< itemList.length; i++){
      report = report + itemList[i].MealName + '(' + itemList[i].Amount + ')' + "\n";
    }
    return report;

  }

  return (

    <Container className="AddOrder p-3">
      <h1 className="mb-3">View current order</h1>
      <Form className='ViewOrderForm'>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Click here to view order" className="addOrderTextField" onSelect={loadOptions}/>
        </Form.Group>
        <Form.Group className="mb-3" name="orderForm">
          {order && order.length > 0 ? order.map((item) => (
          <div key={item.Name}>
            <Row className="mb-3">
              <Col>
                <Form.Check type="checkbox" className="addOrderCheck" label={getOrder(item)} name={"check_" + item.Name} />
              </Col>
            </Row>
          </div>
        )) : <div></div>
        }
        </Form.Group>
      </Form>
    </Container>
  );
}

export default ViewOrder;