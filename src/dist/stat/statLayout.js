import React from 'react'

import Table from '../table/tableResume'
import Modal from '../modal/modal'

export default (props) => (
  <section>
    <div className="subjects-section-header">
      <h2>Notas</h2>
      <button onClick={props.neww}>+</button>
    </div>
    <div>
      <Table 
        subjects={props.rating}
        h1={'Titulo'}
        h2={'Valor'}
        h3={'Opción'}
        b1={'title'}
        b2={'value'}
        update={props.update}
        delete={props.delete}
      />
    </div>
    <Modal modal={props.modal} close={props.neww} title={props.title}>
      <form onSubmit={props.submit} className="subjects-section-form">
        <div>
          <label htmlFor="asignature">Asignatura</label>
          <input type="text" name="asignature"/>
        </div>
        <div>
          <label htmlFor="grade">Grado</label>
          <input type="text" name="grade"/>
        </div>
        <div>
          <button className="btn">Guardar</button>
        </div>
      </form>
    </Modal>
  </section>
)