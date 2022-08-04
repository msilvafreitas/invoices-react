import './Invoice.scss'



const Invoice = (props) => {
    const code = Math.random().toString(16).substring(2, 8)
    return (
        <tr className='line'>
            <td className='code'>{code}</td>
            <td className='date'>{props.date}</td>
            <td className='name'>{props.name}</td>
            <td className='value'>{props.value}</td>
            <a className='changeStatus'>
            <td className={props.color}>{props.situation}</td>
            </a>
        </tr>
    )
}



export default Invoice