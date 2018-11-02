import React from 'react'

import './userLayout.css'
import Cardi from '../cards/cardLittle'

export default (props) => (
    <section>
        <div className="user-section-container">
            <div className="user-section-header">
                <div>
                    <img src="https://picsum.photos/100/100" alt="Imagen del usuario" />
                </div>
                <div>
                    <p>{props.data.user}</p>
                    <span>{props.data.rol}</span>
                </div>
            </div>

            <div className="user-section-resumen">
                <Cardi title="Asignaturas actuales" counter={props.sub.length} >
                    {props.sub.map((e, i) => {
                        if (i < 4) {
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
                </Cardi >

                <Cardi title="Ultimas notas" counter={props.note.length} >
                    {props.note.map((e, i) => {
                        if (i < 3) {
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
                </Cardi >

                <Cardi title="Ultimas evaluaciones" counter={props.rating.length} >
                    {props.rating.map((e, i) => {
                        if (i < 4) {
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
                </Cardi >
            </div>
        </div>
    </section>
)