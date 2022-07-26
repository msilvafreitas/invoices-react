import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Form from './components/Form';
import Invoice from './components/Invoice';

function App() {


  const status = [
    {
      name: 'Paid',
      primaryColor: '#50b09d',
      secondaryColor: '#1f2c3f'
    },
    {
      name: 'Pending',
      primaryColor: '#d88f3b',
      secondaryColor: '#2b2734'
    }]

  const [invoices, setInvoices] = useState([])

  const onNewInvoiceAdd = (invoice) => {

    setInvoices([...invoices, invoice])
  }

  return (
    <div className="App">
      
      <Header />
      <Form onInvoiceSent={invoice => onNewInvoiceAdd(invoice)}/>
      <div className='table'>
        <table>
              <tr className='line head'>
                  
                  <th>Date</th>
                  <th>Name</th>
                  <th>Value</th>
                  
              </tr>
              {invoices.map(invoice => <Invoice key={invoice.code} code={invoice.code} name={invoice.name} date={invoice.date} value={invoice.value} status={invoice.status}/>)}
        </table>
      </div>
    </div>
  );
}

export default App;
