import React from 'react'
import './passwordLayout.css'

export default (props) => (
  <section className="password-section">
    <div className="password-section-head">
      <h2>Cambiemos tu contraseña {props.user.name} </h2>
    </div>
    <div className="password-section-body">
      <form onSubmit={props.submit}>
        <div>
          <label htmlFor="previus">Ingresa tu contraseña actual</label>
          <input name="previus" type="password"/>
        </div>
        <div>
          <label htmlFor="new">Ingresa tu nueva contraseña</label>
          <input name="new" type="password"/>
        </div>
        <div>
          <button type="submit" className="btn">Cambiar</button>
        </div>
      </form>
    </div>
  </section>
)