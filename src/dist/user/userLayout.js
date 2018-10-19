import React from 'react'
import { Link } from 'react-router-dom'

import './userLayout.css'

export default (props) => (
    <section>
        <div className="user-section-container">
            <div className="user-section-header">
                <div>
                    <img src="https://picsum.photos/100/100" alt="Imagen del usuario" />
                </div>
                <div>
                    <p>{props.data.name}</p>
                    <p>{props.data.user}</p>
                    <p>{props.data.email}</p>
                </div>
                <div>
                    <Link to="/you"><span role="img" aria-label="Configuración de perfil">⚙</span></Link>
                </div>
            </div>

            <div className="user-section-resumen">
                <div>
                    <h4>Asignaturas previas <span>{props.sub.length}</span></h4>
                    {props.sub.map((e, i) => (
                        <div key={i}>
                            <p>{e.name}</p>
                            <p>{e.grade}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {console.log(props.note)}
                    <h4>Asignaturas notes <span>{props.note.length}</span></h4>
                    {props.note.map((e, i) => (
                        <div key={i}>
                            <p>{e.title}</p>
                            <p>{e.observation}</p>
                            <p>{e.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
)