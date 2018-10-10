import React from 'react'
import {Link} from 'react-router-dom'

import './userLayout.css'

export default (props) => (
    <section>
        {console.log(props.data)}
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
        </div>
    </section>
)