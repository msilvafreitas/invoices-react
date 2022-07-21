import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <h1>Invoices</h1>
            <h5>There are N total invoices</h5>
            <h4>Filter by</h4>
            <button>New Invoice</button>
        </header>
    )
}


export default Header