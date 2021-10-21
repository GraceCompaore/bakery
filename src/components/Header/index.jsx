import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
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
      <StyledLink to="/survey/1">Questionnaire</StyledLink>
      <StyledLink to="/freelances">Profils</StyledLink>
    </nav>
  )
}

export default Header
