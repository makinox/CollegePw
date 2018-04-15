'user strict'

module.exports = `
<section id="body-rest">
<div class="container">
  <div class="row d-flex justify-content-center text-center">
    <div class="col jumbotron jumbotron-signin">
      <h2 class="bienvenida titulo display-4 titulog">
        Modifica
      </h2>
      <p class="lead">Revisa o modifica a los usuarios por medio de sus identificaciones o nombres
      </p>
    </div>
  </div>
  <form class="form-general mb-2" id="ges-users">
    <div class="row d-flex justify-content-center text-center">
      <span for="basic-url" class="titulog w-100 mb-2">Ingrese el usuario a modificar</span>
      <div class="input-group mb-3 col-6">
        <input type="text" class="form-control idUsuario" placeholder="20" aria-label="11" aria-describedby="basic-addon1" required>
      </div>
    </div>
    <span for="basic-url" class="titulog w-100 mb-2"></span>
    <div class="row d-flex justify-content-center text-center">
      <button type="submit" class="btn btn-primary mb-3">Enviar</button>
    </div>
  </form>
  <!-- Ventana de estado de el usuario en la base de datos -->
  <div class="row form-hide2 justify-content-center" id="dbStatus">
    <div class="card pt-3 m-2 col-md-7">
      <div class="card-body pl-5 pr-5">
        <h5 class="card-title titulog">Datos actuales</h5>
        <hr>
        <p class="card-text nombresb">Nombre:</p>
        <p class="card-text apellidosb">Apellido:</p>
        <p class="card-text usuariob">Usuario:</p>
        <p class="card-text contraseñab">Contraseña:</p>
        <p class="card-text emailb">email:</p>
        <p class="card-text rolb">rol:</p>
        <p class="card-text documentob">documento:</p>
        <button class="btn btn-primary modificarId">Modificar</button>
        <button class="btn btn-danger borrarId aUser" id="wUser">Borrar</button>
      </div>
    </div>
  </div>
      <div class="col p-2 "></div>
      <!-- Formulario de modificacion -->
      <form class="form-general mb-2 form-hide pt-2" id="dbForm">
      <section class="aUser" id="wUser">
        <div class="row d-flex justify-content-center text-center">
          <span for="basic-url" class="titulog w-100 mb-2 mt-2">Nombres</span>
          <div class="input-group mb-3 col-6">
            <input type="text" class="form-control nombresa" placeholder="Jesús david" aria-label="Username" aria-describedby="basic-addon1">
          </div>
        </div>
      </section>

      <section class="aUser" id="wUser">
        <div class="row d-flex justify-content-center text-center">
          <span for="basic-url" class="titulog w-100 mb-2">Apellidos</span>
          <div class="input-group mb-3 col-6">
            <input type="text" class="form-control apellidosa" placeholder="bossa álvarez" aria-label="11" aria-describedby="basic-addon1">
          </div>
        </div>
      </section>

      <section class="aUser" id="wUser">
        <div class="row d-flex justify-content-center text-center">
          <span for="basic-url" class="titulog w-100 mb-2">Email</span>
          <div class="input-group mb-3 col-6">
            <input type="text" class="form-control emaila" placeholder="jesus@correo.com" aria-label="11" aria-describedby="basic-addon1">
          </div>
        </div>
      </section>

      <section class="aUser" id="wUser">
        <div class="row d-flex justify-content-center text-center">
          <span for="basic-url" class="titulog w-100 mb-2">Documento de identidad</span>
          <div class="input-group mb-3 col-6">
            <input type="text" class="form-control documentoa" placeholder="263716287" aria-label="11" aria-describedby="basic-addon1">
          </div>
        </div>
      </section>

      <section class="aUser" id="wUser">
        <div class="row d-flex justify-content-center text-center">
          <span for="basic-url" class="titulog w-100 mb-2 mt-2">Usuario</span>
          <div class="input-group mb-3 col-6">
            <input type="text" class="form-control usuarioa" placeholder="liceo01" aria-label="Username" aria-describedby="basic-addon1">
          </div>
        </div>
      </section>

      <div class="row d-flex justify-content-center text-center">
        <span for="basic-url" class="titulog w-100 mb-2">Contraseña</span>
        <div class="input-group mb-3 col-6">
          <input type="password" class="form-control contraseñaa" placeholder="........." aria-label="11" aria-describedby="basic-addon1">
        </div>
      </div>

      <section class="aUser" id="wUser">
        <div class="row d-flex justify-content-center text-center">
          <span for="basic-url" class="titulog w-100 mb-2">Rol que manejara</span>
          <div class="input-group mb-3 col-6">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01titulog ">Opciones</label>
            </div>
            <select class="custom-select rola" id="inputGroupSelect01">
              <option selected disabled>Escoja una de las siguientes</option>
              <option value="estudiante">Estudiante</option>
              <option value="profesor">Profesor</option>
              <option value="administrador">Administrador</option>
            </select>
          </div>
        </div>
      </section>
      <div class="row d-flex justify-content-center text-center">
        <button type="submit" class="btn btn-primary mb-3">Enviar</button>
      </div>
    </form>
</div>
</section>`