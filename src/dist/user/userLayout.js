import React from 'react'

import './userLayout.css'

export default (props) => (
    <section>
        <div className="user-section-container">
            <div className="user-section-header">
                <div>
                    <img src="https://picsum.photos/100/100" alt="Imagen del usuario" />
                </div>
                <div>
                    {/* <p>{props.data.name}</p> */}
                    <p>{props.data.user}</p>
                    {/* <p>{props.data.email}</p> */}
                </div>
            </div>

            <div className="user-section-resumen">
                <div className="user-section-item" >
                    <h4>Asignaturas previas <span>{props.sub.length}</span></h4>
                    {props.sub.map((e, i) => {
                        if (i < 3 ) {
                            return (
                                <div key={i}>
                                    <p>{e.name}</p>
                                    <p>{e.grade}</p>
                                </div>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
                <div className="user-section-item">
                    <h4>Ultimas notas <span>{props.note.length}</span></h4>
                    {props.note.map((e, i) => {
                        if (i < 3 ) {
                            return (
                                <div key={i}>
                                    <p>{e.title}</p>
                                    <p>{e.observation}</p>
                                    <p>{e.value}</p>
                                </div>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
                <div className="user-section-item">
                    <h4>Ultimas calificaciones <span>{props.rating.length}</span></h4>
                    {props.rating.map((e, i) => {
                        if (i < 3 ) {
                            return (
                                <div key={i}>
                                    <p>{e.title}</p>
                                    <p>{e.value}</p>
                                </div>
                            )
                        } else {
                            return null
                        }
                    })}
                </div>
            </div>
        </div>
    </section>
)