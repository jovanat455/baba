import './Navbar.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ScanReceipt from '../pages/ScanReceipt';
import AddOrder from '../pages/AddOrder';
import NotFound from '../pages/NotFound';
import NavBarLayout from './NavBarLayout';

function NavBar() {
  return (
    <Navbar bg='dark' variant='dark' expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">Baba Delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<NavBarLayout />} >
                  <Route path='/' element={<ScanReceipt />} />
                  <Route path='AddOrder' element={<AddOrder />} />
                  <Route path='*' element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;