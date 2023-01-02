import './App.css';
import StartOrder from './pages/StartOrder';
import AddOrder from './pages/AddOrder';
import ViewOrder from './pages/ViewOrder';
import ScanReceipt from './pages/ScanReceipt';
import ManualOrder from './pages/ManualOrder';
import NotFound from './pages/NotFound';
import Container from 'react-bootstrap/Container';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBarLayout from './components/NavbarLayout';

function App() {
  return (
    <Container className="App" fluid>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarLayout />} >
            <Route path='StartOrder' element={<StartOrder />} />
            <Route path='AddOrder' element={<AddOrder />} />
            <Route path='ViewOrder' element={<ViewOrder />} />
            <Route path='ScanReceipt' element={<ScanReceipt />} />
            <Route path='ManualOrder' element={<ManualOrder />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <header className="App-header">
      </header>
    </Container>
  );
}

export default App;
