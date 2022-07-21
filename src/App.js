import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Invoices from './components/Invoices';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Invoices />
    </div>
  );
}

export default App;
