import './Invoice.scss'



const Invoice = (props) => {
    
    return (
        <tr className='line'>
            <td className='code'>{props.code}</td>
            <td className='date'>{props.date}</td>
            <td className='name'>{props.name}</td>
            <td className='value'>{props.value}</td>
            <td className={props.color}>{props.situation}</td>
        </tr>
    )
}



export default Invoice