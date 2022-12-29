import './App.css';
import ScanReceipt from './pages/ScanReceipt';
import AddOrder from './pages/AddOrder';
import NotFound from './pages/NotFound';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NavBarLayout from './components/NavbarLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarLayout />} >
            <Route path='/' element={<ScanReceipt />} />
            <Route path='AddOrder' element={<AddOrder />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
