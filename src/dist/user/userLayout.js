import React from 'react'
import You from '../you/you'

import './userLayout.css'

export default (props) => (
    <section>
        <div className="user-section-header-container">
            <div>
                <div>
                    <img src="https://picsum.photos/100/100" alt="Imagen del usuario" />
                </div>
                {/* <div>
                    <h2>Josefin Avila</h2>
                </div> */}
            </div>
            <div>
                <nav>
                    <div>
                        <span>Clases</span>
                    </div>
                    <div>
                        <span>Tú</span>
                    </div>
                    <div>
                        <span>Notas</span>
                    </div>
                </nav>
            </div>
        </div>
        <You />
    </section>
)