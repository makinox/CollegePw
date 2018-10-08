import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../home/home'
import Login from '../../login/login'

export default (props) => (
  <Router>
    <div>
      {props.children}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
)