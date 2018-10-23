import React from 'react'
import {Link} from 'react-router-dom'

import img1 from '../../assets/home/img1.svg'
import './homeLayout.css'

export default () => (
  <section>

    <div className="homeLayout-union">

      <div className="homeLayout-hero">

        <div className="homeLayout-hero-container">
          <div className="homeLayout-hero-head">
            <h1>Con <i>Utopía</i> todos podemos estudiar</h1>
            <p>Mira que te lo que te ofrece utopía para ti</p>
          </div>
          <div className="homeLayout-hero-footer">
            <a href="#homeLayout-explain" className="btn">Saber más</a>
            <Link to="/login" className="btn">Iniciar sesión</Link>
          </div>
        </div>

        <div>
          <img src={img1} alt="Utopia de logo de utopia decorado" />
        </div>

      </div>

      <div className="homeLayout-explain" id="homeLayout-explain">

        <div className="card">
          <h2>Qué es utopía</h2>
          <p>Utopia es una plataforma que brinda el servicio de gestión educacional a cualquier institución educativa de todos los niveles.
          <br />
            Nos enfocamos en aquellas entidades que cuentan con pocos recursos y poca disponibilidad tecnologica.
        </p>
        </div>

        <div className="card">
          <h2>Qué hacemos</h2>
          <p>Utopía te ofrece sus servicios de gestión a la comunidad completamente gratis.
          <br />
            Te ayudamos a gestionar la información de estudiantes, profesores y tutores, asi mejorando la comunicación entre ellos.
          <br />
            Usamos algoritmos de inteligencia artificial para predecir e identificar falencias y mejoras en los estudiantes.
        </p>
        </div>

      </div>

    </div>

    <div className="homeLayout-footer">
      <div>
        <iframe title="Utopia apps.co" width="100%" align="middle" height="315" src="https://www.youtube.com/embed/2le9qLtoqV4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      <div className="card homeLayout-footer-card">
        <h2>En utopía nos importas tu</h2>
        <p>Entra y descubre todo lo que tenemos para ti</p>
        <span className="btn">Comencemos!</span>
      </div>
    </div>

  </section>
)