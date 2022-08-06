import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Situation from './components/Situation';

function App() {


  const situations = [
    {
      name: 'Pending',
      color: 'yellow',
      symbol: '⧖'
    },
    {
      name: 'Paid',
      color: 'green',
      symbol: '✔'
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
                    <tr className='line'>
                      <td className='code'>{'41h29c'}</td>
                      <td className='date'>{'14/04/2022'}</td>
                      <td className='name'>{'Company A'}</td>
                      <td className='value'>{'231,120'}</td>
                      <td className={'green'}>{'✔'}</td>
                    </tr>
                    <tr className='line'>
                      <td className='code'>{'1qjpm4'}</td>
                      <td className='date'>{'21/05/2022'}</td>
                      <td className='name'>{'Company B'}</td>
                      <td className='value'>{'83,321'}</td>
                      <td className={'green'}>{'✔'}</td>
                    </tr>
                    <tr className='line'>
                      <td className='code'>{'3xn5kq'}</td>
                      <td className='date'>{'03/06/2022'}</td>
                      <td className='name'>{'Company C'}</td>
                      <td className='value'>{'643,620'}</td>
                      <td className={'green'}>{'✔'}</td>
                    </tr>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
