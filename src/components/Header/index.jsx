import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Header.css'
const StyledLink = styled(Link)`
  padding: 15px;
  color: white;
  text-decoration: none;
  font-size: 18px;
`
function Header() {
  return (
    <nav className="bp-navbar">
      <StyledLink to="/">ACCUEIL</StyledLink>
      <StyledLink to="/menu">MENU</StyledLink>
      <StyledLink to="/order">COMMANDER</StyledLink>
      <StyledLink to="/pertinent">A PROPOS</StyledLink>
      <StyledLink to="/contact">CONTACT</StyledLink>
    </nav>
  )
}

export default Header
