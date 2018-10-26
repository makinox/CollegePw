import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../assets/navbar/logo.svg'
import './navbar.css'

export default (props) => (
  <header>
    {props.log ? (
      <nav className="log">
        <div>
          <Link to='/'><img src={img1} alt="Logo de jesús bossa" /></Link>
        </div>
        <div className="dropdown">
          <div onClick={props.click} >
            <img src="https://picsum.photos/30/30" alt="" />
            <span>Username</span>
          </div>
          <ul style={{display: `${props.display}`}}>
            <li>
              <Link to='/you'>
                <span onClick={props.out} role='img' aria-label='Configuración'>⚙</span>
                <span>Configuración</span>
              </Link>
            </li>
            <li>
              <span onClick={props.out} role='img' aria-label='Cerrar sesión'>⭕ Cerrar sesión</span>
            </li>
          </ul>
        </div>
      </nav>
    ) : (
        <nav className="noLog">
          <div>
            <Link to='/'><img src={img1} alt="Logo de jesús bossa" /></Link>
          </div>
          <div>
            <Link to='/login'>Inicia sesión</Link>
          </div>
        </nav>
      )}
  </header>
)