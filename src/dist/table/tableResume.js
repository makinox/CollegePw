import React from 'react'
import './tableResume.css'

export default (props) => (
  <table className="tableResume-table" align="center">
    <thead>
      <tr>
        <th>{props.h1}</th>
        <th>{props.h2}</th>
        {props.hextra ? (<th>{props.hextra}</th>) : (<></>)}
        <th>{props.h3}</th>
      </tr>
    </thead>
    <tbody>{props.subjects.map(el => (
      <tr key={el.id}>
        <td>{el[props.b1]}</td>
        <td>{el[props.b2]}</td>
        {props.bextra ? (<td>{el[props.bextra]}</td>) : (<></>)}
        <td>
          <span role='img' aria-label='Editar' onClick={() => props.update(el.id)}>🖍</span>
          <span role='img' aria-label='Modificar'>✖</span>
        </td>
      </tr>
    ))}</tbody>
  </table>
)