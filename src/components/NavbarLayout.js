import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from "react-bootstrap/Image";

const NavBarLayout = () => {
  return (
    <>
      <Navbar bg='light' variant='light' expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand href="/">
            <Image src={`${process.env.PUBLIC_URL}/favicon.png`} alt="Page not found" fluid />{' '}
            Baba Delivery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="menuList">Home</Link>
              <Link to="/AddOrder" className="menuList">Add Order</Link>
              <Link to="/StartOrder" className="menuList">Start Order</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default NavBarLayout;
