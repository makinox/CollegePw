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
        subjects={props.note}
        h1={'Titulo'}
        h2={'Observación'}
        hextra={'Valor'}
        h3={'Opción'}
        b1={'title'}
        b2={'observation'}
        bextra={'value'}
        update={props.update}
        delete={props.delete}
      />
    </div>
    <Modal modal={props.modal} close={props.neww} title={props.title}>
      <form onSubmit={props.submit} className="subjects-section-form">
        <div>
          <label htmlFor="asignature">Title</label>
          <input type="text" name="asignature"/>
        </div>
        <div>
          <label htmlFor="grade">Observación</label>
          <input type="text" name="grade"/>
        </div>
        <div>
          <label htmlFor="value">Valor</label>
          <input type="text" name="value"/>
        </div>
        <div>
          <button className="btn">Guardar</button>
        </div>
      </form>
    </Modal>
  </section>
)