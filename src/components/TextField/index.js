import './TextField.scss'

const TextField = (props) => {

    const placeholderMod = `${props.placeholder}...`

    const onTyped = (event) => {
        props.onModified(event.target.value)
    }
    
    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input 
                value={props.value} 
                onChange={onTyped} 
                required={props.required} 
                placeholder={placeholderMod} 
                maxLength={props.length}/>
        </div>
    )
}

export default TextField