'use strict'

module.exports = `<div class="container">
<div class="row d-flex justify-content-center text-center">
  <div class="col jumbotron jumbotron-signin">
    <h2 class="bienvenida titulo display-4 titulog">
      Crea
    </h2>
    <p class="lead">Ten en cuenta que los usuarios disponibles son de estudiantes, profesores y administradores
    </p>
  </div>
</div>
<form class="form-general mb-2" id="gen-users">
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2 mt-2">Nombres</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control nombresa" placeholder="Jesús david" aria-label="Username" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2">Apellidos</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control apellidosa" placeholder="bossa álvarez" aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2">Email</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control emaila" placeholder="jesus@correo.com" aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2">Documento de identidad</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control documentoa" placeholder="263716287" aria-label="11" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2 mt-2">Usuario</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control usuarioa" placeholder="liceo01" aria-label="Username" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2">Contraseña</span>
    <div class="input-group mb-3 col-6">
      <input type="password" class="form-control contraseñaa" placeholder="........." aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2">Rol que manejara</span>
    <div class="input-group mb-3 col-6">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01titulog ">Opciones</label>
      </div>
      <select class="custom-select rola" id="inputGroupSelect01" required>
        <option selected disabled>Escoja una de las siguientes</option>
        <option value="estudiante">Estudiante</option>
        <option value="profesor">Profesor</option>
        <option value="administrador">Administrador</option>
      </select>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <button type="submit" class="btn btn-primary mb-3 titulog">Enviar</button>
  </div>
</form>
</div>`
