import './App.css';
import ScanReceipt from './pages/ScanReceipt';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <ScanReceipt />
      </header>
    </div>
  );
}

export default App;
