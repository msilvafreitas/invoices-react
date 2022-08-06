import './Header.scss'


const Header = (props) => {
    return (
        <header className='header'>
            <h1>Invoices</h1>
            <h5>There are {props.total+3} invoices</h5>
        </header>
    )
}


export default Header