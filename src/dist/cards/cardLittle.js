import React from 'react'
import { Link } from 'react-router-dom'
import './cardLittle.css'

export default (props) => (
  <div className="cardLittle">
    <Link to={props.route}><h4>{props.title} <span>{props.counter}</span></h4></Link>
      {props.children}
  </div>
)