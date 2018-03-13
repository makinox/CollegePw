'use strict'

module.exports = `<div class="container">
<div class="row d-flex justify-content-center text-center">
  <div class="col jumbotron jumbotron-signin">
    <h2 class="bienvenida titulo display-4">
      Crea
    </h2>
    <p class="lead">Ten en cuenta que los usuarios disponibles son de estudiantes, profesores y administradores
    </p>
  </div>
</div>
<form class="form-general mb-2">
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2 mt-2">Nombres</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control" placeholder="Jesús david" aria-label="Username" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2">Apellidos</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control" placeholder="bossa álvarez" aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2">Email</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control" placeholder="jesus@correo.com" aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2">Contraseña</span>
    <div class="input-group mb-3 col-6">
      <input type="password" class="form-control" placeholder="........." aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2">Rol que manejara</span>
    <div class="input-group mb-3 col-6">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Opciones</label>
      </div>
      <select class="custom-select" id="inputGroupSelect01">
        <option selected disabled>Escoja una de las siguientes</option>
        <option value="1">Estudiante</option>
        <option value="2">Profesor</option>
        <option value="3">Administrador</option>
      </select>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <button type="submit" class="btn btn-primary mb-3">Enviar</button>
  </div>
</form>
</div>`
