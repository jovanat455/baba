import React from "react";
import Container from 'react-bootstrap/Container';

function NotFound() {
  return (
    <Container className='StartOrder'>
      <img src={`${process.env.PUBLIC_URL}/assets/images/404.webp`} alt="Page not found" />
    </Container>
  );
}

export default NotFound;