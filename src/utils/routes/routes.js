import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../pages/home'
import Login from '../../pages/login'
import Register from '../../pages/register'

import User from '../../pages/user'
import You from '../../pages/you'
import Password from '../../pages/password'
import Config from '../../pages/uconfig'
import Subjects from '../../pages/subject'
import Notes from '../../pages/notes'

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
          <Route exact path="/subjects" component={Subjects} />
          <Route exact path="/notes" component={Notes} />
        </Switch>
      ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/singup" component={Register} />
          </Switch>
        )}
    </div>
  </Router>
)