import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Invoice from './components/Invoice';

function App() {


  const situations = [
    {
      name: 'Paid',
      color: 'green'
    },
    {
      name: 'Pending',
      color: 'yellow'
    }]

  const [invoices, setInvoices] = useState([])

  const onNewInvoiceAdd = (invoice) => {

    setInvoices([...invoices, invoice])
  }

  return (
    <div className="App">
      
      <Header />
      <Form 
        situations={situations.map(situation => situation.name)} 
        onInvoiceSent={invoice => onNewInvoiceAdd(invoice)} />
      <div className='table'>
        <table>
              <tr className='line head'>
                  <th>Code</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Value</th>
                  <th>Status</th>
                  
              </tr>
              {invoices.map(invoice => 
                <Invoice 
                  key={invoice.name} 
                  code={invoice.code} 
                  name={invoice.name} 
                  date={invoice.date} 
                  value={invoice.value} 
                  situation={invoice.situation} 
                  color={invoice.color}/>)}
        </table>
      </div>
    </div>
  );
}

export default App;
