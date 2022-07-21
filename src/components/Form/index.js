import { useState } from 'react'
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
                
            </form>

        </section>

    )


}

export default Form