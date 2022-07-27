import './Invoice.scss'

const Invoice = ({  code, date, name, value, status }) => {
    return (
        <tr className='line'>
            
            <td className='code'>{code}</td>
            <td className='date'>{date}</td>
            <td className='name'>{name}</td>
            <td className='value'>{value}</td>
            <td className='status'>{status}</td>
            
        </tr>
    )
}

export default Invoice