const Dropd = (props) => {
    return (
        <div className='dropd'>
            <label>{props.label}</label>
            <select onChange={event => props.onChange(event.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Dropd