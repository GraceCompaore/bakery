import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">ACCUEIL</Link>
            <Link to="/menu">MENU</Link>
            <Link to="/order">COMMANDER</Link>
            <Link to="/pertinent">A PROPOS</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
    )
}

export default Header