import './ManualOrder.css';
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

const viewOrderApi = "https://babadb20221229134825.azurewebsites.net/api/GetOrderedMeals?code=QDSnUB6KCaBplqPsnWvwg-2DhkGfoi1DA_ncvBrhA9N-AzFufGdRMQ==&StringCorrect=1";
const getAllOrders = "https://babadb20221229134825.azurewebsites.net/api/GetAllActivetOrders?code=YPa88ZCdXF1jwWP7rGQFb7ecUy5Opw-YayM2nMS31pbGAzFu1DBOdg==&StringCorrect=1"
var uniqueID = 1;
var customersPrice = 0;
var customersIds = [];
var allItems = [];

function ViewOrder() {
  const [order, setOrders] = useState(null);
  const [user, setUsers] = useState(null);
  const [orderLoaded, setOrderLoaded] = useState(false);

  const loadOptions = async (event) => {
    if (!orderLoaded) {
      event.preventDefault();

      let orders = await axios.get(viewOrderApi);
      let users = await axios.get(getAllOrders);

      setOrders(orders.data);
      setUsers(users.data);

      setOrderLoaded(true);
    }
  }

  const insertOrderData = () => {
    //check if lists are not empty
    for (let i = 0; i < user.length; i++) {
      let userName = user[i].Name;
      let userMeals = user[i].OrderedItems;
      for (let j = 0; j < userMeals.length; j++) {
        let mealName = userMeals[j].MealName;
        let mealAmount = userMeals[j].Amount;
        let elementId = userName + '_' + mealName;
        let targetElement = document.getElementById(elementId);
        if (targetElement) {
          targetElement.value = mealAmount;
        }

      }
    }

    calculateReceipt()
  }

  function CalculatePerPerson(table, totalOrders, userID) {
    var sum = 0;
    for (var i = 1; i < table.rows.length; i++) {
      var totalArticalPrice = parseFloat(table.rows[i].cells[1].innerHTML);
      var itemName = table.rows[i].cells[0].innerHTML;
      var totalQuantity = totalOrders[i];
      var customerQuantity = parseFloat(document.getElementById(userID + '_' + itemName).value)
      if (totalQuantity > 0) {
        sum = sum + totalArticalPrice * customerQuantity / totalQuantity;
      }
    }

    customersPrice = parseInt(customersPrice + sum);
    return parseInt(sum);
  }

  const setCustomersIds = () => {
    let i = 0;
    let customers = [];
    user.forEach(element => {
      customers[i++] = element.Name;
    });
    return customers;
  }

  const setAllItems = () => {
    let i = 0;
    let orders = [];
    order.forEach(element => {
      orders[i++] = element.Name;
    });
    return orders;
  }

  const calculateReceipt = async (event) => {
    var table = document.getElementById("table"),
      totalPrice = 0, totalOrder = 0, totalOrders = [],
      i, j;

    customersPrice = 0;

    customersIds = setCustomersIds();
    allItems = setAllItems();

    for (i = 1; i < table.rows.length; i++) {
      totalPrice = totalPrice + parseFloat(table.rows[i].cells[1].innerHTML);
    }

    totalOrders.push(totalOrder);
    for (i = 0; i < allItems.length; i++) {

      for (let k = 0; k < customersIds.length; k++) {
        let x = customersIds[k] + '_' + allItems[i];
        let y = document.getElementById(x);
        totalOrder = totalOrder + parseFloat(document.getElementById(customersIds[k] + '_' + allItems[i]).value);
      }
      totalOrders.push(totalOrder);
      totalOrder = 0;
    }

    customersIds.forEach(user => {
      var price = CalculatePerPerson(table, totalOrders, user);
      document.getElementById(user.concat('_ID_place')).innerHTML = document.getElementById(user.concat('_ID_place')).getAttribute('name') + " = " + price;
    });

    document.getElementById("priceFromCustomers").innerHTML = "Customers = " + customersPrice;
    document.getElementById("totalPrice").innerHTML = "Total = " + totalPrice;

  }

  return (
    <Container className="ViewOrderForm p-3">
      <Form className='ViewOrderForm' onSubmit={loadOptions}>
        <br />
        <Table className='table styled-table'>
          <Row>
            <Col id="priceFromCustomers">Customers total</Col>
            <Col id="totalPrice">Total</Col>
            {user && user.length > 0 && user.map((item) => (
              <Col id={item.Name + '_ID_place'} name={item.Name}>{item.Name}</Col>

            ), uniqueID = 2)
            }

          </Row>
        </Table>
        <br />
        <table className='table styled-table' id="table">
          <tr>
            <th>Meal Name</th>
            <th>Meal Price</th>
            {user && user.length > 0 && user.map((item) => (

              <th><input placeholder={item.Name} id={item.Name + "_ID1"} className="input" /></th>

            ))
            }
          </tr>
          {order && order.length > 0 && order.map((item) => (

            <tr>
              <td id={item.Name}>{item.Name}</td>
              <td>{item.Price}</td>
              {user && user.length > 0 && user.map((u) => (
                <td><input type="number" min="0" max="5" defaultValue={0} onChange={calculateReceipt} id={u.Name + "_" + item.Name} className="input" /></td>
              ))
              }
            </tr>
          ))
          }
        </table>
        <button className="rgbButton">Load order</button>

      </Form>
      <br />
      <button className="rgbButton" onClick={insertOrderData} disabled={!orderLoaded} >Load meals</button>
    </Container>

  );
}

export default ViewOrder;