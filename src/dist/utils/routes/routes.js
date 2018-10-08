import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../home/home'
import Login from '../../login/login'

import User from '../../user/user'

export default (props) => (
  <Router>
    <div>
      {props.children}
      {props.log ? (
        <Switch>
          <Route exact path="/" component={User} />
        </Switch>
      ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        )}
    </div>
  </Router>
)