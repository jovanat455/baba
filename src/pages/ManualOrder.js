import './ManualOrder.css';
import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

// TODO: Set API to read from ManualOrder table
const viewOrderApi = "https://babadb20221229134825.azurewebsites.net/api/GetMeals?code=jrVJdFzLX-5juwuMYcBrSAT5REiJ5qHtbFwkuDZHLnXiAzFuMfY96w==";
var uniqueID = 1;
var customersPrice = 0;

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

  function CalculatePerPerson(table, totalOrders, customerNumber) {
    var sum = 0;
    for (var i = 1; i < table.rows.length; i++) {
        var totalArticalPrice = parseFloat(table.rows[i].cells[1].innerHTML);
        var totalQuantity = totalOrders[i];
        var customerQuantity = parseFloat(document.getElementById("customer".concat(customerNumber).concat(i)).value)
        if (totalQuantity > 0) {
            sum = sum + totalArticalPrice * customerQuantity / totalQuantity;
        }
    }

    customersPrice = parseInt(customersPrice + sum);
    return parseInt(sum);
  }

  const calculateReceipt = async(event) => {
    var table = document.getElementById("table"),
    totalPrice = 0, totalOrder = 0, totalOrders = [],
    customer1 = 0, customer2 = 0, customer3 = 0, customer4 = 0, customer5 = 0,
    customer6 = 0, customer7 = 0, customer8 = 0, customer9 = 0, customer10 = 0,
    i, j;

    customersPrice = 0;

    for (i = 1; i < table.rows.length; i++) {
        totalPrice = totalPrice + parseFloat(table.rows[i].cells[1].innerHTML);
    }

    totalOrders.push(totalOrder);
    for (i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];
        for (j = 2; j < row.cells.length; j++) {
              totalOrder = totalOrder + parseFloat(document.getElementById("customer".concat(j-1).concat(i)).value);
        }
        totalOrders.push(totalOrder);
        totalOrder = 0;
    }

    customer1 = CalculatePerPerson(table, totalOrders, 1);
    customer2 = CalculatePerPerson(table, totalOrders, 2);
    customer3 = CalculatePerPerson(table, totalOrders, 3);
    customer4 = CalculatePerPerson(table, totalOrders, 4);
    customer5 = CalculatePerPerson(table, totalOrders, 5);
    customer6 = CalculatePerPerson(table, totalOrders, 6);
    customer7 = CalculatePerPerson(table, totalOrders, 7);
    customer8 = CalculatePerPerson(table, totalOrders, 8);
    customer9 = CalculatePerPerson(table, totalOrders, 9);
    customer10 = CalculatePerPerson(table, totalOrders, 10);

    document.getElementById("priceFromCustomers").innerHTML = "Customers = " + customersPrice;
    document.getElementById("totalPrice").innerHTML = "Total = " + totalPrice;
    document.getElementById("priceForCustomer1").innerHTML = document.getElementById("customerName1").value + " = " + customer1;
    document.getElementById("priceForCustomer2").innerHTML = document.getElementById("customerName2").value + " = " + customer2;
    document.getElementById("priceForCustomer3").innerHTML = document.getElementById("customerName3").value + " = " + customer3;
    document.getElementById("priceForCustomer4").innerHTML = document.getElementById("customerName4").value + " = " + customer4;
    document.getElementById("priceForCustomer5").innerHTML = document.getElementById("customerName5").value + " = " + customer5;
    document.getElementById("priceForCustomer6").innerHTML = document.getElementById("customerName6").value + " = " + customer6;
    document.getElementById("priceForCustomer7").innerHTML = document.getElementById("customerName7").value + " = " + customer7;
    document.getElementById("priceForCustomer8").innerHTML = document.getElementById("customerName8").value + " = " + customer8;
    document.getElementById("priceForCustomer9").innerHTML = document.getElementById("customerName9").value + " = " + customer9;
    document.getElementById("priceForCustomer10").innerHTML = document.getElementById("customerName10").value + " = " + customer10;
  }

  return (

    <Container className="ViewOrderForm p-3">
      <h1 className="mb-3">View current order</h1>
      <Form className='ViewOrderForm' onSubmit={loadOptions}>
        <br/>
        <Table className='table styled-table'>
          <Row>
            <Col id="priceFromCustomers">Customers total</Col>
            <Col id="totalPrice">Total</Col>
            <Col id="priceForCustomer1">1</Col>
            <Col id="priceForCustomer2">2</Col>
            <Col id="priceForCustomer3">3</Col>
            <Col id="priceForCustomer4">4</Col>
            <Col id="priceForCustomer5">5</Col>
            <Col id="priceForCustomer6">6</Col>
            <Col id="priceForCustomer7">7</Col>
            <Col id="priceForCustomer8">8</Col>
            <Col id="priceForCustomer9">9</Col>
            <Col id="priceForCustomer10">10</Col>
          </Row>
        </Table>
        <br/>
        <table className='table' id="table" class="styled-table">
          <tr>
            <th>Meal Name</th>
            <th>Meal Price</th>
            <th><input type="string" id="customerName1" className="input"/></th>
            <th><input type="string" id="customerName2" className="input"/></th>
            <th><input type="string" id="customerName3" className="input"/></th>
            <th><input type="string" id="customerName4" className="input"/></th>
            <th><input type="string" id="customerName5" className="input"/></th>
            <th><input type="string" id="customerName6" className="input"/></th>
            <th><input type="string" id="customerName7" className="input"/></th>
            <th><input type="string" id="customerName8" className="input"/></th>
            <th><input type="string" id="customerName9" className="input"/></th>
            <th><input type="string" id="customerName10" className="input"/></th>
          </tr>
          {order && order.length > 0 ? order.map((item) => (
          <tr>
            <td>{item.Name}</td>
            <td>100</td>{/*TODO: Update Price from the table*/}
            <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={"customer1" + uniqueID} className="input"/></td>
            <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={"customer2" + uniqueID} className="input"/></td>
            <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={"customer3" + uniqueID} className="input"/></td>
            <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={"customer4" + uniqueID} className="input"/></td>
            <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={"customer5" + uniqueID} className="input"/></td>
            <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={"customer6" + uniqueID} className="input"/></td>
            <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={"customer7" + uniqueID} className="input"/></td>
            <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={"customer8" + uniqueID} className="input"/></td>
            <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={"customer9" + uniqueID} className="input"/></td>
            <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={"customer10" + uniqueID++} className="input"/></td>
          </tr>
          ), uniqueID=1) : <div></div>
        }
        </table>
        <button className="rgbButton">Load</button>
      </Form>
    </Container>
  );
}

export default ViewOrder;