import { useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import './Form.scss'
import NumberFormat from 'react-number-format'
import Dropd from '../Dropd'





const Form = (props) => {

    const gcode = Math.random().toString(16).substring(2, 8)
    const [code, setCode] = useState(gcode)
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [situation, setSituation] = useState('')
    const [color, setColor] = useState('')
   
    
    const onSave = (event) => {
        event.preventDefault()
        
        props.onInvoiceSent({
            code,
            date,
            name,
            value,
            situation,
            color
        })
        setCode(gcode)
        setDate('')
        setName('')
        setValue('')
        setSituation('')
        setColor('')
    }


    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h4>New:</h4>
                <TextField 
                    required={true}
                    label="Code"
                    placeholder="Code"
                    value={code}
                    onModified={value => setCode(value)}
                    length={7}
                />
                <NumberFormat 
                    customInput={TextField}
                    format="##/##/####" 
                    label="Date"
                    required={true}
                    placeholder="DD/MM/YYYY" 
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
                    label="Value"
                    required={true}
                    placeholder="$$$" 
                    value={value}
                    onModified={value => setValue(value)}
                    />
                
                <Dropd 
                    required={true}
                    label="Status"
                    itens={props.situations}
                    value={situation}
                    onChange={value => setSituation(value)}
                />
                
                
                <Button>New Invoice</Button>
            </form>

        </section>

    )


}

export default Form