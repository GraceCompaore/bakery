import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../../core/context/CartContext';
import './Header.css';

const StyledLink = styled(Link)`
  padding: 15px;
  color: white;
  text-decoration: none;
  font-size: 18px;
`;
function Header() {
  const history = useHistory();
  const { cart } = useContext(CartContext);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    if (cart) {
      const count = cart.reduce((acc, curr) => {
        acc += curr.quantity;
        return acc;
      }, 0);
      setProductCount(count);
    }
  }, [cart]);

  const handleGoToLoginPage = () => {
    history.push('/connexion');
  };

  return (
    <header>
      <div className="bp-header">
        <nav className="bp-navbar">
          <StyledLink to="/">YASOMA</StyledLink>
          <StyledLink to="/menu">NOS PRODUITS</StyledLink>
          <StyledLink to="/pertinent">A PROPOS</StyledLink>
          <StyledLink to="/contact">CONTACT</StyledLink>
        </nav>
        <div className="bp-authenthification">
          <button
            onClick={() => {
              handleGoToLoginPage();
            }}
          >
            Connexion
          </button>
        </div>
        <Link to="/cart">
          panier: <span>{productCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
