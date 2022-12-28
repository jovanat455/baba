import './Navbar.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import ScanReceipt from '../pages/ScanReceipt';
import AddOrder from '../pages/AddOrder';
import NotFound from '../pages/NotFound';
import NavBarLayout from './NavBarLayout';

function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBarLayout />} >
          <Route path='/' element={<ScanReceipt />} />
          <Route path='AddOrder' element={<AddOrder />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;