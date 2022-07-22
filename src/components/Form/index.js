import { useState } from 'react'
import TextField from '../TextField'
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
                    onTyped={value => setCode(value)}
                />
                <TextField 
                    required={true}
                    label="Date"
                    placeholder="Select Date"
                    value={date}
                    onTyped={value => setDate(value)}
                />
                <TextField 
                    required={true}
                    label="Name"
                    placeholder="Client name"
                    value={name}
                    onTyped={value => setName(value)}
                />
                <TextField 
                    required={true}
                    label="Value"
                    placeholder="Insert invoice value"
                    value={value}
                    onTyped={value => setValue(value)}
                />
                <TextField 
                    required={true}
                    label="Status"
                    placeholder="Status"
                    value={status}
                    onTyped={value => setStatus(value)}
                />
            </form>

        </section>

    )


}

export default Form