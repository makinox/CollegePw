import React from 'react'

import Table from '../table/tableResume'
import Modal from '../modal/modal'
import './subjectLayout.css'

export default ({subjects, update, neww, modal}) => (
  <section>
    <div className="subjects-section-header">
      <h2>Asignaturas</h2>
      <button onClick={neww}>+</button>
    </div>
    <div>
      <Table 
        subjects={subjects}
        h1={'Asignatura'}
        h2={'Grado'}
        h3={'Opción'}
        b1={'name'}
        b2={'grade'}
        update={update}
      />
    </div>
    <Modal modal={modal} close={neww} title={'Nueva asignatura'}>
      <h2>Hola modal</h2>
    </Modal>
  </section>
)