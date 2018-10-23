import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../home/home'
import Login from '../../login/login'

import User from '../../user/user'
import You from '../../you/you'
import Password from '../../password/password'
import Config from '../../uconfig/uconfig'

export default (props) => (
  <Router>
    <div>
      {props.children}
      {props.log ? (
        <Switch>
          <Route exact path="/" component={User} />
          <Route exact path="/you" component={You} />
          <Route exact path="/you/pass" component={Password} />
          <Route exact path="/you/config" component={Config} />
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