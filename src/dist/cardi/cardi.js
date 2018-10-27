import React from 'react'
import './cardi.css'

export default (props) => (
  <div className="cardi">
    <h4>{props.title} <span>{props.counter}</span></h4>
      {props.children}
  </div>
)