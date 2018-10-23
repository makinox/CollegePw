import React from 'react'
import {Link} from 'react-router-dom'

import './youLayout.css'

export default (props) => (
    <section>
        <div className="youLayout-container">
                <div className="youLayout-container-header">
                    <img src="https://picsum.photos/100/100" alt="Foto de perfil"/>
                    <p>{props.data.name || 'Tu nombre'}</p>
                    <p>{props.data.user || 'Tu usuario'}</p>
                </div>
                <div className="youLayout-container-body">
                    <div>
                        <h4>Correo</h4>
                        <p>{props.data.email || 'Tu email'}</p>
                    </div>
                    <div>
                        <h4>Edad</h4>
                        <p>{props.data.age || 'Tu año'}</p>
                    </div>
                    <div>
                        <h4>Grado</h4>
                        <p>{props.data.grade || 'Tu grado'}</p>
                    </div>
                </div>

                <div className="youLayout-container-footer">
                    <Link to="/you/pass"><span role="img" aria-label="Cambiar contraseña" className="btn">🔒</span></Link>
                    <Link to="/you/config"><span role="img" aria-label="Cambiar datos" className="btn">⚙</span></Link>
                </div>
        </div>
    </section>
)