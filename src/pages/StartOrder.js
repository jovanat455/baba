import React from 'react';
import './StartOrder.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";

function StartOrder() {
  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  return (
    <Container className='StartOrder p-3'>
      <h1 className="mb-3">Start your order</h1>
      <Image src={`${process.env.PUBLIC_URL}/assets/images/startEngines.gif`} className="mb-3" alt="Start ordering" fluid/>
      <Form onSubmit={handleSubmit} className='StartOrderForm mb-3'>
        <Form.Control placeholder="Your name here" className="addOrderTextField mb-3" />
        <button className="rgbButton mb-3">Ready...Set...GO!</button>
      </Form>
    </Container>
  );
};

export default StartOrder;