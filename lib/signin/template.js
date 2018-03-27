'use strict'

module.exports = ` 
<section id="body-signin">
  <div class="container">
    <div class="row d-flex justify-content-center text-center">
      <div class="col jumbotron jumbotron-signin">
        <h2 class="bienvenida titulo display-4">
          Bienvenido
        </h2>
        <p class="lead">Inicia sesión</p>
      </div>
    </div>
  </div>
  <div class="container">
    <form id="signina">
      <div class="row d-flex justify-content-center text-center">
        <div class="card col-8 signin">
          <div class="card-body">
            <div class="input-group mb-3">
              <input type="text" class="form-control uAuth" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon11">
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control pAuth" placeholder="Contraseña" aria-label="Password" aria-describedby="basic-addon12">
            </div>
            <button class="btn btn-primary">Ingresa</button>
            <p></p>
            <p>O
              <a href="/signout" class="btn">Regístrate</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</section>`
