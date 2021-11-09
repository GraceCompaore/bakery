import { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import { CartContext } from '../../core/context/CartContext';
import './Header.css';

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
      <div className="font-serif w-full bg-black	flex flex-row p-8 text-white text-xl">
        <nav className="space-x-4">
          <NavLink
            activeClassName="underline"
            exact
            to="/"
            className="text-white text-opacity-50 hover:text-white active:text-white focus:text-white visited:text-white"
          >
            YASOMA
          </NavLink>
          <NavLink
            activeClassName="underline"
            to="/menu"
            className="text-white text-opacity-50 hover:text-white focus:text-white"
          >
            NOS PRODUITS
          </NavLink>
          <NavLink
            activeClassName="underline"
            to="/about"
            className="text-white text-opacity-50 hover:text-white focus:text-white"
          >
            A PROPOS
          </NavLink>
          <NavLink
            activeClassName="underline"
            to="/contact"
            className="text-white text-opacity-50 hover:text-white focus:text-white"
          >
            CONTACT
          </NavLink>
        </nav>

        <div className="spacer"></div>

        <div className="px-8 space-x-4">
          <button
            className="bg-white text-black px-8 rounded-lg ring  hover:bg-blue-200"
            onClick={() => {
              handleGoToLoginPage();
            }}
          >
            Connexion
          </button>

          <NavLink activeClassName="text-white" to="/cart" className="px-8">
            <i className="fa fa-shopping-cart"></i>
            <span>Panier : {productCount} </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
