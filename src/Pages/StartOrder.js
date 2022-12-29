import React, { useState } from 'react';
import './StartOrder.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

function StartOrder() {

  const handleSubmit = async (event) => {
    event.preventDefault();
  }

  <Container className='StartOrder'>
    <img src={`${process.env.PUBLIC_URL}/assets/images/startEngines.gif`} className="oopsImage" alt="oops..." />
    <Form onSubmit={handleSubmit} className='StartOrderForm'>
      <Form.Control placeholder="Your name here" className="addOrderTextField" />
      <button className="rgbButton">Ready...Set...GO!</button>
    </Form>
  </Container>
};

export default StartOrder;