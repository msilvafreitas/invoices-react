import './Invoice.scss'

const Invoice = ({  code, date, name, value, situation }) => {
    return (
        <tr className='line'>
            
            <td className='code'>{code}</td>
            <td className='date'>{date}</td>
            <td className='name'>{name}</td>
            <td className='value'>{value}</td>
            <td className='situation'>{situation}</td>
            
        </tr>
    )
}

export default Invoice