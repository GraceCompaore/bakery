import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/index'
import Menu from './pages/Menu/index'
import Order from './pages/Order/index'
import Pertinent from './pages/Pertinent/index'
import Contact from './pages/Contact/index'
import Error from './components/Error'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
     {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 10px;
    }
`
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
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
