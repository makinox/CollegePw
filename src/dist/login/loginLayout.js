import React from 'react'

import './loginLayout.css'

export default (props) => (
  <section className="section-container-login">
    <div className="section-container-login-card">
      <div >
        <h2>Utopía</h2>
        <h3>Iniciar sesión</h3>
      </div>
      <div >
        <form onSubmit={props.submit} >
          <div>
            <label htmlFor="user" >Ingresa tu usuario</label>
            <input type="text" name="user" autoFocus />
          </div>
          <div>
            <label htmlFor="password">Ingresa tu contraseña</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button type="submit" className="btn" style={{ fontSize: 'initial' }}>Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  </section>
)