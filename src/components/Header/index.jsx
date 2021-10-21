import { Link } from 'react-router-dom'
import './index.css'

function Header() {
    return (
        <nav className= 'bp-navbar' >
            <ul>
            <li><Link to="/">ACCUEIL</Link></li>
            <li><Link to="/menu">MENU</Link></li>
            <li><Link to="/order">COMMANDER</Link></li>
            <li><Link to="/pertinent">A PROPOS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default Header