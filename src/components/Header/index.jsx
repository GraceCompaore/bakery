import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

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
        <nav className="space-x-4  ">
          <Link
            to="/"
            className="text-white text-opacity-50 hover:text-white active:text-white focus:text-white visited:text-white"
          >
            YASOMA
          </Link>
          <Link
            to="/menu"
            className="text-white text-opacity-50 hover:text-white focus:text-white"
          >
            NOS PRODUITS
          </Link>
          <Link
            to="/pertinent"
            className="text-white text-opacity-50 hover:text-white focus:text-white"
          >
            A PROPOS
          </Link>
          <Link
            to="/contact"
            className="text-white text-opacity-50 hover:text-white focus:text-white"
          >
            CONTACT
          </Link>
        </nav>

        <div className="spacer"></div>

        <div className="px-8 space-x-4">
          <button
            className="bg-black px-8 rounded-lg ring  hover:bg-blue-200"
            onClick={() => {
              handleGoToLoginPage();
            }}
          >
            Connexion
          </button>

          <Link to="/cart" className="px-8">
            <i class="fa fa-shopping-cart"></i>
            <span>{productCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
