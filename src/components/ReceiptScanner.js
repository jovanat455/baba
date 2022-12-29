// This form includes an input field of type `file`, which allows the user to select an image file.
// The `handleChange` event handler updates the `image` state variable with the selected file.
// The `handleSubmit` event handler prevents the default form submission behavior and can be used to send the selected image to the backend.
import React, { useState } from 'react';
import './ReceiptScanner.css'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import Alert from 'react-bootstrap/Alert';
const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

const key = "79116af525cf49efa4d99e1deaf9fa90";
const endpoint = "https://baba.cognitiveservices.azure.com/";

const mealsApi = "https://babadb20221229134825.azurewebsites.net/api/GetMeals?code=jrVJdFzLX-5juwuMYcBrSAT5REiJ5qHtbFwkuDZHLnXiAzFuMfY96w==";

function ReceiptForm() {
  const [image, setImage] = useState(null);
  const [receipt, setItems] = useState(null);
  const [isProcessed, setStatus] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus(true);
    setError(false);
    setItems(null);

    let meals = await axios.get(mealsApi);
    console.log(meals.data);

    if (image) {
      // Send image to backend here
      const formData = new FormData();
      formData.append('image', image);

      const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));

      const poller = await client.beginAnalyzeDocument("prebuilt-receipt", image);

      const {
        documents: [result]
      } = await poller.pollUntilDone();

      if (result === undefined) {
        setError(true);
        setStatus(false);
        return;
      }

      if (!result.fields.Items) {
        setError(true);
        setStatus(false);
        return;
      }

      if (result) {
        let Receipt = {
          Items: result.fields.Items,
          Total: result.fields.Total,
          TransactionDate: result.fields.TransactionDate,
          TransactionTime: result.fields.TransactionTime,
        }

        setItems(Receipt);
        setStatus(false);
      } else {
        throw new Error("Expected at least one receipt in the result.");
      }
    } else {
      setError(true);
      setStatus(false);
    }
  }

  return (
    <Container className='p-3'>
      <h1 className="mb-3">Receipt scanner</h1>
      {error ?
        <div>
          <Alert variant="danger" onClose={() => setError(false)} dismissible>
            <Image src={`${process.env.PUBLIC_URL}/assets/images/oops.gif`} className="oopsImage" alt="oops..." fluid />
            <Alert.Heading className='mt-3'>Oh snap! You got an error! Try again, I guess...</Alert.Heading>
          </Alert>
        </div> : <div></div>}
      {receipt && receipt.Items && receipt.Items.values.length > 0 ? receipt.Items.values.map((item) => (
        <div key={item.properties.Description.content}>
          <p>Opis: {item.properties.Description.content}</p>
          <p>Kolicina: {item.properties.Quantity.content}</p>
          <p>Cena: {item.properties.Price.content}</p>
          <p>Ukupno: {item.properties.TotalPrice.content}</p>
          <hr align='center' />
        </div>
      )) : <div></div>
      }
      {isProcessed ? <Image src={`${process.env.PUBLIC_URL}/assets/images/baba-loading.gif`} className="loader" alt="Baba loading..." /> : <div></div>}
      <Form onSubmit={handleSubmit} className='p-3'>
        <input type="file" onChange={handleChange} />
        <button className="rgbButton mt-3">Submit</button>
      </Form>

      <Container>

      </Container>
    </Container>
  );
}
export default ReceiptForm;
