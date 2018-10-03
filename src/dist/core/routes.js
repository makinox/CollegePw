import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../sections/containers/home'

export default (props) => (
  <Router>
    <div>
      {props.children}
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Router>
)