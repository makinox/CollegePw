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
        <div>
          <Link to='/you'><span onClick={props.out} role='img' aria-label='Configuración' style={{fontSize: '25px'}}>⚙</span></Link>
        </div>
        <div>
          <span onClick={props.out} role='img' aria-label='Cerrar sesión'>⭕</span>
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