import React from "react";
import Form from 'react-bootstrap/Form';

function AddOrder() {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/assets/images/order.gif`} className="orderImage" alt="takeOrder" />
      <Form>
        <Form.Control placeholder="Username" />
      </Form>
    </div>
  );
}

export default AddOrder;