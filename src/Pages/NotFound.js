import React from "react";
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";

function NotFound() {
  return (
    <Container className='StartOrder'>
      <Image src={`${process.env.PUBLIC_URL}/assets/images/404.webp`} alt="Page not found" fluid />

    </Container>
  );
}

export default NotFound;