'use strict'

module.exports = `<div class="container">
<div class="row d-flex justify-content-center text-center">
  <div class="col jumbotron jumbotron-signin">
    <h2 class="bienvenida titulo display-4">
      Administrador
    </h2>
    <p class="lead">Aqui puedes administrar, gestionar y crear recursos para la institucion</p>
  </div>
</div>
</div>
<div class="container">
<div class="row mb-3">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Generar periodos academicos</h5>
        <p class="card-text">Aqui puedes generar nuevos periodos academicos y generar asignaturas con sus respectivas clases</p>
        <a href="/gen-academy" class="btn btn-primary gen-academy">Generar</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Generar usuarios</h5>
        <p class="card-text">Aqui puedes generar nuevos usuarios tales como estudiantes profesores y administradores</p>
        <a href="/gen-users" class="btn btn-primary gen-users">Generar</a>
      </div>
    </div>
  </div>
</div>
<div class="row mb-3">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Gestionar periodos academicos</h5>
        <p class="card-text">Aqui puedes gestionar todos los atributos de los periodos academiscos existentes</p>
        <a href="/ges-academy" class="btn btn-primary ges-academy">Gestionar</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Gestionar usuarios</h5>
        <p class="card-text">Aqui puedes gestionar toda la informacion de los usuarios</p>
        <a href="/ges-users" class="btn btn-primary ges-users">Gestionar</a>
      </div>
    </div>
  </div>
</div>
</div>`
