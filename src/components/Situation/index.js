import Invoice from "../Invoice"
import './Situation.scss'

const Situation = (props) => {
    

    return (   
       
        
        (props.invoices.length > 0) ? <div className="status">
            <table>
                
            {props.invoices.map ( invoice =>
                <Invoice 
                  code={invoice.code}
                  color={props.color}
                  key={invoice.name} 
                  name={invoice.name} 
                  date={invoice.date} 
                  value={invoice.value} 
                  situation={props.symbol} 
                  />)}

            </table>
        </div>
        : ''
    )   
}

export default Situation