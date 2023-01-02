import { Outlet, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from "react-bootstrap/Image";

const NavBarLayout = () => {
  return (
    <>
      <Navbar bg='light' variant='light' expand="lg" sticky='top' className="justify-content-center">
        <Container>
          <Navbar.Brand href="/">
            <Image src={`${process.env.PUBLIC_URL}/favicon.png`} alt="Page not found" fluid />{' '}
            Baba Delivery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/StartOrder" className="menuList">Start Order</NavLink>
              <NavLink to="/AddOrder" className="menuList">Add Order</NavLink>
              <NavLink to="/ViewOrder" className="menuList">View Order</NavLink>
              <NavLink to="/ScanReceipt" className="menuList">Scan Receipt</NavLink>
              <NavLink to="/ManualOrder" className="menuList">Manual Order</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet className="test"/>
    </>
  )
};

export default NavBarLayout;
