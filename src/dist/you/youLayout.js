import React from 'react'

import './youLayout.css'

export default (props) => (
    <section>
        {console.log(props.data)}
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
                    <span role="img" aria-label="Cambiar contraseña" className="btn">🔒</span>
                    <span role="img" aria-label="Cambiar datos" className="btn">🖍</span>
                </div>
        </div>
    </section>
)