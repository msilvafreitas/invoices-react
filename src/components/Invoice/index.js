import './Invoice.scss'

const Invoice = ({  date, name, value, }) => {
    return (
        <tr className='line'>
            
            <td className='date'>{date}</td>
            <td className='name'>{name}</td>
            <td className='value'>{value}</td>
            
        </tr>
    )
}

export default Invoice