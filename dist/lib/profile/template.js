'use strict'

module.exports = `
<section id="body-signin">
<div class="container">
  <div class="row d-flex justify-content-center text-center">
    <div class="col jumbotron jumbotron-signin">
      <h2 class="bienvenida titulo display-4 titulog">
        Modifica
      </h2>
      <p class="lead">Revisa o modifica los cursos creados anteriormente por medio de sus Id o periodo academico
      </p>
    </div>
  </div>
  <div class="row d-flex justify-content-center p-3">
    <div class="card bg-dark text-white">
      <img class="card-img" src="https://placem.at/places?w=720&h=240" alt="Card image">
      <div class="card-img-overlay">
        <h5 class="card-title apellidos titulog">:name:</h5>
        <p class="card-text">11-A</p>
      </div>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-left">
    <table class="table table-striped table-hover col-12 col-md-7">
    <caption class="titulog">Notas recientes</caption>
      <thead>
        <tr>
          <th scope="col titulog">#</th>
          <th scope="col titulog">Nombre</th>
          <th scope="col titulog">Nota</th>
        </tr>
      </thead>
      <tbody id="recent">

      </tbody>
    </table>
    <table class="table table-striped table-hover col-12 col-md-7">
      <caption class="titulog">Asignaturas inscritas</caption>
      <thead>
        <tr>
          <th scope="col titulog">#</th>
          <th scope="col titulog">Nombre</th>
          <th scope="col titulog">Clase</th>
        </tr>
      </thead>
      <tbody id="clases">

      </tbody>
    </table>
  </div>
    
  </div>
</div>
</section>`
