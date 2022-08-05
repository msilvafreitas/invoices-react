import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Situation from './components/Situation';

function App() {


  const situations = [
    {
      name: 'Paid',
      color: 'green',
      symbol: '✔'
    },
    {
      name: 'Pending',
      color: 'yellow',
      symbol: '⧖'
    }]

  const [invoices, setInvoices] = useState([])

  const onNewInvoiceAdd = (invoice) => {

    setInvoices([...invoices, invoice])
  }

  return (
    <div className="App">
      <Header total={invoices.length} />
      
      <div className='body'>
        <Form 
          situations={situations.map(situation => situation.name)} 
          onInvoiceSent={invoice => onNewInvoiceAdd(invoice)} />
          <div className='invoices table'>
          
        <div>
                {situations.map(situation => 
                    <Situation 
                      key={situation.name}
                      name={situation.name}
                      color={situation.color}
                      symbol={situation.symbol}
                      invoices={invoices.filter(invoice => invoice.situation === situation.name)}
                    />)}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
