import Alert from 'react-bootstrap/Alert';
import React from "react";
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";

function NotFound() {
  return (
    <Container className='StartOrder'>
      <Image src={`${process.env.PUBLIC_URL}/assets/images/404.webp`} alt="Page not found" fluid />
      <Alert variant="danger">
        <h1>404!</h1>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      </Alert>
    </Container>
  );
}

export default NotFound;