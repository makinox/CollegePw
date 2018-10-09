import React from 'react'

import './userLayout.css'

export default (props) => (
    <section>
        <div className="user-section-header-container">
            <div>
                <img src="https://picsum.photos/100/100" alt="Imagen del usuario"/>
            </div>
            <div>
                <nav>
                    <div>
                        <span>Tú</span>
                    </div>
                    <div>
                        <span>Clases</span>
                    </div>
                    <div>
                        <span>Notas</span>
                    </div>
                </nav>
            </div>
        </div>
    </section>
)