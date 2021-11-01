import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Error from './components/Error';
import { CartProvider } from './core/context/CartContext';
import Cart from './pages/Cart/Cart';
import ConnexionPage from './pages/Connexion/ConnexionPage';
import Contact from './pages/Contact/index';
import Home from './pages/Home/index';
import { FilterProvider } from './pages/Menu/context/FilterContext';
import Menu from './pages/Menu/index';
import Pertinent from './pages/Pertinent/index';

const GlobalStyle = createGlobalStyle`
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
    body {
      margin: 10px;
    }
`;

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <GlobalStyle />
        <CartProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/menu">
              <FilterProvider>
                <Menu />
              </FilterProvider>
            </Route>
            <Route path="/pertinent">
              <Pertinent />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/Connexion">
              <ConnexionPage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>

            <Route>
              <Error />
            </Route>
          </Switch>
        </CartProvider>
      </Router>
    </React.StrictMode>
  );
};

export default App;
