import Button from '../Button'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <h1>Invoices</h1>
            <h5>There are N total invoices</h5>
            <h4>Filter by</h4>
            <Button>New Invoice</Button>
        </header>
        
    )
}


export default Header