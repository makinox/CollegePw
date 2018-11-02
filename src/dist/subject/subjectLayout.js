import React from 'react'

import Table from '../table/tableResume'
import './subjectLayout.css'

export default ({subjects}) => (
  <section className="subjects-section">
    <div>
      <h2>Asignaturas</h2>
    </div>
    <div>
      <Table 
        subjects={subjects}
        h1={'Asignatura'}
        h2={'Grado'}
        h3={'Opción'}
        b1={'name'}
        b2={'grade'}
      />
    </div>
  </section>
)