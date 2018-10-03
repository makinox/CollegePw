import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default (props) => (
  <Router>
    <div>
      {props.children}
      <Switch>
        {/* <Route exact path="/" component= /> */}
      </Switch>
    </div>
  </Router>
)