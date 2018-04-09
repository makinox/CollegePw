'use-script'

module.exports = `<div class="container">
<div class="row d-flex justify-content-center text-center">
  <div class="col jumbotron jumbotron-signin">
    <h2 class="bienvenida titulo display-4">
      Modifica
    </h2>
    <p class="lead">Revisa o modifica los cursos creados anteriormente por medio de su Id
    </p>
  </div>
</div>
<form class="form-general mb-2" id="ges-academy">
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2 mt-2">Ingresar Id del curso</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control idAsignaturas" placeholder="30" aria-label="Username" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <span for="basic-url" class="w-100 mb-2"></span>
  <div class="row d-flex justify-content-center text-center">
    <button type="submit" class="btn btn-primary mb-3">Enviar</button>
  </div>
</form>
<!-- Ventana de estado de el usuario en la base de datos -->
<div class="row justify-content-center form-hide2" id="dbStatus2">
  <div class="card pt-3 m-2 col-md-5">
    <div class="card-body pl-5 pr-5">
      <h5 class="card-title">Datos actuales</h5>
      <hr>
      <p class="card-text nombresb">Curso:</p>
      <p class="card-text apellidosb">Periodo:</p>
      <p class="card-text contraseñab">Grado:</p>
      <p class="card-text emailb">Codigo del curso:</p>
      <!-- <p class="card-text rolb">rol:</p> -->
      <!-- <p class="card-text codigob">codigo:</p> -->
      <button class="btn btn-primary modificarId aUser" id="wUser">Modificar</button>
      <button class="btn btn-warning notasId">Notas</button>
      <button class="btn btn-danger borrarId aUser" id="wUser">Borrar</button>
    </div>
  </div>
  <table class="table table-striped table-hover col-12 col-md-6 mt-2">
  <caption>Estudiantes en el curso</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Nota 1</th>
        <th scope="col">Nota 2</th>
        <th scope="col">Nota 3</th>
      </tr>
    </thead>
    <tbody id="EstData">

    </tbody>
  </table>
<!-- Formulario de modificacion -->
<form class="form-general mb-2 mt-3 form-hide" id="dbForm">
  <div class="row d-flex justify-content-center text-center">
  <span for="basic-url" class="w-100 mb-2 mt-2">Nombre del curso</span>
  <div class="input-group mb-3 col-6">
    <input type="text" class="form-control nombreCursosa" placeholder="Matematicas 11" aria-label="Username" aria-describedby="basic-addon1" required>
  </div>
  </div>
  <div class="row d-flex justify-content-center text-center" id="dbForm">
    <span for="basic-url" class="w-100 mb-2 mt-2">Ingresar el periodo academico</span>
    <div class="input-group mb-3 col-7">
      <input type="text" class="form-control periodosa" placeholder="2018-A" aria-label="Username" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2">Ingresar el grado</span>
    <div class="input-group mb-3 col-7">
      <input type="text" class="form-control gradosa" placeholder="11" aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
      <span for="basic-url" class="w-100 mb-2">Codigo especial del curso</span>
      <div class="input-group mb-3 col-7">
        <input type="text" class="form-control codigoGa" placeholder="gen-30" aria-label="11" aria-describedby="basic-addon1" required>
      </div>
    </div>
    <div class="row d-flex justify-content-center text-center">
        <button type="submit" class="btn btn-primary mb-3">Enviar</button>
    </div>
  </form>
  <!-- formulario de notas -->
    <form class="form-general mb-2 form-hide" id="dbStat">
      <div class="row d-flex justify-content-center text-center">
        <span for="basic-url" class="w-100 mb-2 mt-2">Usuario del estudiante</span>
        <div class="input-group mb-3 col-6">
          <input type="text" class="form-control userc" placeholder="sasnjiro" aria-label="Username" aria-describedby="basic-addon1" required>
        </div>
      </div>
      <div class="row d-flex justify-content-center text-center">
        <span for="basic-url" class="w-100 mb-2 mt-2 eUser" id="wUser">Calificacion estudiante</span>
        <div class="input-group mb-3 col-7">
          <input type="text" class="form-control cec eUser" id="wUser" placeholder="5.0" aria-label="Usernamed" aria-describedby="basic-addon2">
        </div>
      </div>
      <div class="row d-flex justify-content-center text-center">
        <span for="basic-url" class="w-100 mb-2 pUser" id="wUser">Calificacion de profesor</span>
        <div class="input-group mb-3 col-7">
          <input type="text" class="form-control cpc pUser" id="wUser" placeholder="5.0" aria-label="11" aria-describedby="basic-addon1" >
        </div>
      </div>
      <div class="row d-flex justify-content-center text-center">
        <span for="basic-url" class="w-100 mb-2 pUser" id="wUser">Nota 1 corte</span>
        <div class="input-group mb-3 col-7">
          <input type="text" class="form-control nt1 pUser" id="wUser" placeholder="5.0" aria-label="11" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="row d-flex justify-content-center text-center">
        <span for="basic-url" class="w-100 mb-2 pUser" id="wUser">Nota 2 corte</span>
        <div class="input-group mb-3 col-7">
          <input type="text" class="form-control nt2 pUser" id="wUser" placeholder="5.0" aria-label="11" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="row d-flex justify-content-center text-center">
        <span for="basic-url" class="w-100 mb-2 pUser" id="wUser">Nota 3 corte</span>
        <div class="input-group mb-3 col-7">
          <input type="text" class="form-control nt3 pUser" id="wUser" placeholder="5.0" aria-label="11" aria-describedby="basic-addon1">
        </div>
      </div>
      <div class="row d-flex justify-content-center text-center">
        <button type="submit" class="btn btn-primary mb-3">Enviar</button>
      </div>
    </form>
</div>
`
