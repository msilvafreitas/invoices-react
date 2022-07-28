import './List.scss'

const List = (props) => {
    return (
        <div className='list'>
            <label>{props.label}</label>
            <select onChange={event => props.onChanged(event.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default List