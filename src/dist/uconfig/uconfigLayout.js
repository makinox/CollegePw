import React from 'react'

import './uconfigLayout.css'

export default (props) => (
  <section className="uconfig-section-container">
    <div>
      <h2>Cambia tus datos {props.user.name} </h2>
    </div>
    <div className="uconfig-section-body">
      <form onSubmit={props.submit}>
        <div>
          <label htmlFor="previus">Nombre</label>
          <input name="previus" type="text" placeholder={props.user.name}/>
        </div>
        <div>
          <label htmlFor="new">Email</label>
          <input name="new" type="text" placeholder={props.user.email}/>
        </div>
        <div>
          <button type="submit" className="btn" style={{ fontSize: 'initial' }}>Cambiar</button>
        </div>
      </form>
    </div>
  </section>
)