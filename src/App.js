import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './Pages/ScanReceipt';
import Profile from './Pages/AddOrder';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<Router>
<Navbar />
  <Routes>
    <Route excat path="/scanReceipt" element={<Login />}> </Route>
    <Route excat path="/addOrder" element={<Profile />}> </Route>
    </Routes>
  
</Router>

        {/* <ReceiptForm /> */}
      </header>
    </div>
  );
}

export default App;
