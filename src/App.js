import './App.css';
import ScanReceipt from './pages/ScanReceipt';
import AddOrder from './pages/AddOrder';
import StartOrder from './pages/StartOrder';
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
            <Route path='/' element={<ScanReceipt />} />
            <Route path='AddOrder' element={<AddOrder />} />
            <Route path='StartOrder' element={<StartOrder />} />
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
