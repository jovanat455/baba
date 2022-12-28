// This form includes an input field of type `file`, which allows the user to select an image file.
// The `handleChange` event handler updates the `image` state variable with the selected file.
// The `handleSubmit` event handler prevents the default form submission behavior and can be used to send the selected image to the backend.
import React, { useState } from 'react';
const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

const key = "79116af525cf49efa4d99e1deaf9fa90";
const endpoint = "https://baba.cognitiveservices.azure.com/";

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

      // for (const item of (Receipt.Items && Receipt.Items.values) || []) {
      //   let Item = {
      //     Description: item.properties.Description.content,
      //     Quantity: item.properties.Quantity.content,
      //     Price: item.properties.Price.content,
      //     TotalPrice: item.properties.TotalPrice.content,
      //   }
      // }
      setItems(Receipt);
      setStatus(false);
    } else {
      throw new Error("Expected at least one receipt in the result.");
    }
  }

  return (
    <div>
      {error ?
        <div className="alert">
          <img src={`${process.env.PUBLIC_URL}/assets/images/oops.gif`} className="oopsImage" alt="oops..." />
          <p>Oops! Something went wrong.</p>
          <p>Please try again.</p>
        </div> : <div></div>}
      {receipt && receipt.Items && receipt.Items.values.length > 0 ? receipt.Items.values.map((item) => (
        <div key={item.properties.Description.content}>
          <p>Opis: {item.properties.Description.content}</p>
          <p>Kolicina: {item.properties.Quantity.content}</p>
          <p>Cena: {item.properties.Price.content}</p>
          <p>Ukupno: {item.properties.TotalPrice.content}</p>
          <hr />
        </div>
      )) : <div></div>
      }
      {isProcessed ? <img src={`${process.env.PUBLIC_URL}/assets/images/baba-loading.gif`} className="loader" alt="oops..." /> : <div></div>}
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} />
        <button className="rgbButton">Submit</button>
      </form>
    </div>
  );
}
/*
<InfinitySpin
        width='200'
        color="#f34f1c"
      />
*/
export default ReceiptForm;
