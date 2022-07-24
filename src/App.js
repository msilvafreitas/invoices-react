import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Form from './components/Form';
import Invoice from './components/Invoice';

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
      
      {invoices.map(invoice => <Invoice key={invoice.code} code={invoice.code} name={invoice.name} date={invoice.date} value={invoice.value} status={invoice.status}/>)}
    </div>
  );
}

export default App;
