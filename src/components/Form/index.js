import { useState } from 'react'
import TextField from '../TextField'
import Button from '../Button'
import './Form.scss'

const Form = (props) => {

    const [code, setCode] = useState('')
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [status, setStatus] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onInvoiceSent({
            code,
            date,
            name,
            value,
            status
        })
        setCode('')
        setDate('')
        setName('')
        setValue('')
        setStatus('')
    }


    return (
        <section className="form">
            <form onSubmit={onSave}>
                <TextField 
                    required={true}
                    label="Code"
                    placeholder="Insert Code"
                    value={code}
                    onModified={value => setCode(value)}
                />
                <TextField 
                    required={true}
                    label="Date"
                    placeholder="Select Date"
                    value={date}
                    onModified={value => setDate(value)}
                />
                <TextField 
                    required={true}
                    label="Name"
                    placeholder="Client name"
                    value={name}
                    onModified={value => setName(value)}
                />
                <TextField 
                    required={true}
                    label="Value"
                    placeholder="Insert invoice value"
                    value={value}
                    onModified={value => setValue(value)}
                />
                <TextField 
                    required={true}
                    label="Status"
                    placeholder="Status"
                    value={status}
                    onModified={value => setStatus(value)}
                />
                <Button>New Invoice</Button>
            </form>

        </section>

    )


}

export default Form