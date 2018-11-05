import React from 'react'
import './registerLayout.css'

export default (props) => (
  <section className="section-container-register" >
    <div className="section-container-register-card">
      <div >
        <h2>Utopía</h2>
        <h3>Regístrate</h3>
      </div>
      <div >
        <form onSubmit={props.submit} >
          <div>
            <label htmlFor="entity" >Ingresa el nombre de la institución</label>
            <input type="text" name="entity" autoFocus />
          </div>
          <div>
            <label htmlFor="max" >Maximo de estudiantes</label>
            <input type="text" name="max" />
          </div>
          <div>
            <label htmlFor="user" >Ingresa tu usuario</label>
            <input type="text" name="user" />
          </div>
          <div>
            <label htmlFor="pass" >Ingresa tu contraseña</label>
            <input type="password" name="pass" />
          </div>
          <div>
            <button type="submit" className="btn" style={{ fontSize: 'initial' }}>Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  </section>
)