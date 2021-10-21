import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/index'
import Menu from './pages/Menu/index'
import Order from './pages/Order/index'
import Pertinent from './pages/Pertinent/index'
import Contact from './pages/Contact/index'
import Header from './components/Header'
import Error from './components/Error'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/pertinent">
          <Pertinent />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)