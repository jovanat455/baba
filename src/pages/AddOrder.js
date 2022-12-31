import './AddOrder.css';
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import axios from 'axios';

const mealsApi = "https://babadb20221229134825.azurewebsites.net/api/GetMeals?code=jrVJdFzLX-5juwuMYcBrSAT5REiJ5qHtbFwkuDZHLnXiAzFuMfY96w==";

function AddOrder() {
  
  const [meals, setMeals] = useState(null);
  const [mealsLoaded, setMealsLoaded] = useState(false);

  const loadOptions = async (event) => {
    if (!mealsLoaded) {
      event.preventDefault();

      let mealsNames = await axios.get(mealsApi);
      setMeals(mealsNames.data);

      setMealsLoaded(true);
    }
  }

  let navigate = useNavigate();

  const submitForm = (event) =>{
    event.preventDefault();

    // Add meat here

    let path = `/`;
    navigate(path);
  }

  return (

    <Container className="AddOrder p-3">
      <h1 className="mb-3">Add your order</h1>
      <Image src={`${process.env.PUBLIC_URL}/assets/images/order.gif`} className="mb-3" alt="Add your order" fluid />
      <Form className='AddOrderForm'>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Username" className="addOrderTextField" onSelect={loadOptions}/>
        </Form.Group>
        <Form.Group className="mb-3" name="mealsForm">
          {meals && meals.length > 0 ? meals.map((item) => (
          <div key={item.Name}>
            <Row className="mb-3">
              <Col>
                <Form.Check type="checkbox" className="addOrderCheck" label={item.Name} name={"check_" + item.Name} />
              </Col>
              <Col>
                <Form.Select aria-label="PortionSize" size='sm' className="addOrderSelect" defaultValue={0} name={"select_" + item.Name}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Select>
              </Col>
            </Row>
          </div>
        )) : <div></div>
        }
        </Form.Group>
        <button variant="primary" type="submit" className="rgbButton" onClick={submitForm}>
          Done
        </button>
      </Form>
    </Container>
  );
}

export default AddOrder;