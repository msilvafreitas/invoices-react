import './Invoice.scss'

const Invoice = ({ code, date, name, value, status }) => {
    return (
        <div className='invoice'>
            <h5>{code}</h5>
            <h5>{date}</h5>
            <h5>{name}</h5>
            <h5>{value}</h5>
            <h5>{status}</h5>
        </div>
    )
}

export default Invoice