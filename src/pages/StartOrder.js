import React from 'react';
import './StartOrder.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import axios from 'axios';

const startOrderApi = "https://babadb20221229134825.azurewebsites.net/api/StartOrder?code=Gqo_y9PQPrMz2Tf-5AdgUwELFoOAS_zKbfRkT-UXKDhaAzFuKPuBEA==";

function StartOrder() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    let apiBuilder = startOrderApi + "&owner=" + event.target[0].value;
    let result = await axios.get(apiBuilder);
    //TODO: Add Message that order is created 
    event.target[0].value = result.data;
  }

  return (
    <Container className='StartOrder p-3'>
      <h1 className="mb-3">Start your order</h1>
      <Image src={`${process.env.PUBLIC_URL}/assets/images/startEngines.gif`} className="mb-3" alt="Start ordering" fluid/>
      <Form onSubmit={handleSubmit} className='StartOrderForm mb-3'>
        <Form.Control placeholder="Your name here" className="addOrderTextField mb-3" />
        <button className="rgbButton mb-3">Done</button>
      </Form>
    </Container>
  );
};

export default StartOrder;