import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Form from './components/Form';

function App() {


  const [invoices, setInvoices] = useState([])

  const onNewInvoiceAdd = (invoice) => {

    setInvoices([invoice, invoices])
  }

  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Form onInvoiceSent={invoice => onNewInvoiceAdd(invoice)}/>
      
    </div>
  );
}

export default App;
