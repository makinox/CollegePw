'use strict'

module.exports = `<div class="container">
<div class="row d-flex justify-content-center text-center">
  <div class="col jumbotron jumbotron-signin">
    <h2 class="bienvenida titulo display-4">
      Registro
    </h2>
    <p class="lead">Aqui puedes iniciar el proceso de registro de tu institucion</p>
  </div>
</div>
</div>
<div class="container">
<form class="form-general mb-2" id="signout">
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2 mt-2">Identificacion de la institucion</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control identificacion" placeholder="Institucion educativa liceo del cielo" aria-label="institucion"
        aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2 mt-2">Nombre de la institucion</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control nombreEnt" placeholder="Liceo del cielo" aria-label="institucion" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2">Rol que manejara</span>
    <div class="input-group mb-3 col-6">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Opciones</label>
      </div>
      <select class="custom-select servicios" id="inputGroupSelect01" required>
        <option selected disabled>Escoja una de las siguientes</option>
        <option value="primaria">Primaria</option>
        <option value="bachillerato">Bachillerato</option>
        <option value="ambas">Ambas</option>
      </select>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2 mt-2">Usuario</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control usuariob" placeholder="liceo01" aria-label="Username" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2 mt-2">Contraseña</span>
    <div class="input-group mb-3 col-6">
      <input type="password" class="form-control contraseñab" placeholder="......" aria-label="Username" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2 mt-2">Nombres del responsable</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control nombresb" placeholder="Jesús david" aria-label="Username" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2">Apellidos del responsable</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control apellidosb" placeholder="bossa álvarez" aria-label="11" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2">Documento de identidad</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control documentob" placeholder="187982639" aria-label="11" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2">Email</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control emailb" placeholder="jesus@correo.com" aria-label="11" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <div class="form-group col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
        <label class="form-check-label" for="invalidCheck">
          Aceptar terminos y condiciones
        </label>
        <div class="invalid-feedback">Debe aceptar antes de enviar los datos</div>
      </div>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <button class="btn btn-primary mb-3 envio" type="submit">Registrarse</button>
  </div>
</form>
</div>`
