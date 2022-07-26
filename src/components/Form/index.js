import { useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import './Form.scss'
import NumberFormat from 'react-number-format'


const Form = (props) => {

    
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
   

    const onSave = (event) => {
        event.preventDefault()
        props.onInvoiceSent({
            
            date,
            name,
            value,
            
        })
        
        setDate('')
        setName('')
        setValue('')
        
    }


    return (
        <section className="form">
            <form onSubmit={onSave}>
                
                
                <NumberFormat 
                    customInput={TextField}
                    format="##/##/####" 
                    label="Date"
                    required={true}
                    placeholder="DD/MM/YYYY" 
                    mask={['D', 'D', 'M', 'M', 'Y', 'Y', 'Y', 'Y']}
                    value={date}
                    onModified={value => setDate(value)}
                    />
                <TextField 
                    required={true}
                    label="Name"
                    placeholder="Client name"
                    value={name}
                    onModified={value => setName(value)}
                    length={12}
                />
                <NumberFormat 
                    customInput={TextField}
                    thousandSeparator={true}
                    prefix={'$'}
                    label="Value"
                    required={true}
                    placeholder="$$$" 
                    value={value}
                    onModified={value => setValue(value)}
                    length={9}
                    />
                
                <Button>New Invoice</Button>
            </form>

        </section>

    )


}

export default Form