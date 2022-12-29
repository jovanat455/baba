import React, {useState} from 'react';
import './StartOrder.css';
import Form from 'react-bootstrap/Form';

function StartOrder() {

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}/assets/images/startEngines.gif`} className="oopsImage" alt="oops..." />
            <form onSubmit={handleSubmit}>
                <Form.Control placeholder="Your name here" className="addOrderTextField" />
                <button className="rgbButton">Ready...Set...GO!</button>
            </form>
        </div>
  );
}

export default StartOrder;
