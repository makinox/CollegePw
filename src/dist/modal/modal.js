import React from 'react'
import './modal.css'

export default (props) => (
  props.modal ? (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div>
            <h2>{props.title}</h2>
          </div>
          <div>
            <button onClick={props.close}><span>&times;</span></button>
          </div>
        </div>
        <div className="modal-body">
          {props.children}
        </div>
      </div>
    </div>
  ) : (
      <></>
    )
)