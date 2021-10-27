import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Header.css';

const StyledLink = styled(Link)`
  padding: 15px;
  color: white;
  text-decoration: none;
  font-size: 18px;
`;
function Header() {
  return (
    <div className="bp-header">
      <nav className="bp-navbar">
        <StyledLink to="/">YASOMA</StyledLink>
        <StyledLink to="/menu">NOS PRODUITS</StyledLink>
        <StyledLink to="/pertinent">A PROPOS</StyledLink>
        <StyledLink to="/contact">CONTACT</StyledLink>
      </nav>
      <div className="bp-authenthification">
        <button className="btn-welcome" type="submit">
          Connexion
        </button>
      </div>
    </div>
  );
}

export default Header;
