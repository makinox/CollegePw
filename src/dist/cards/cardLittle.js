import React from 'react'
import './cardLittle.css'

export default (props) => (
  <div className="cardLittle">
    <h4>{props.title} <span>{props.counter}</span></h4>
      {props.children}
  </div>
)