'use-script'

module.exports = `
<section id="body-rest">
<div class="container">
<div class="row d-flex justify-content-center text-center">
  <div class="col jumbotron jumbotron-signin">
    <h2 class="bienvenida titulo display-4 titulog">
      Modifica
    </h2>
    <p class="lead">Revisa o modifica los cursos creados anteriormente por medio de su Id
    </p>
  </div>
</div>
<form class="form-general mb-2" id="ges-academy">
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2 mt-2">Ingresar Id del curso</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control idAsignaturas" placeholder="30" aria-label="Username" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <span for="basic-url" class="titulog w-100 mb-2"></span>
  <div class="row d-flex justify-content-center text-center">
    <button type="submit" class="btn btn-primary mb-3">Enviar</button>
  </div>
</form>
<!-- Ventana de estado de el usuario en la base de datos -->
<div class="row justify-content-center form-hide2" id="dbStatus2">
  <div class="card pt-3 m-2 col-md-7">
    <div class="card-body pl-5 pr-5">
      <h5 class="card-title titulog">Datos de la asignatura</h5>
      <hr>
      <p class="card-text nombresb">Curso:</p>
      <p class="card-text apellidosb">Periodo:</p>
      <p class="card-text contraseñab">Grado:</p>
      <p class="card-text emailb">Codigo del curso:</p>
      <!-- <p class="card-text rolb">rol:</p> -->
      <!-- <p class="card-text codigob">codigo:</p> -->
      <button class="btn titulog btn-primary modificarId aUser" id="wUser">Modificar</button>
      <button class="btn titulog btn-warning notasId">Notas</button>
      <button class="btn titulog btn-danger borrarId aUser" id="wUser">Borrar</button>
    </div>
  </div>
  <!-- Estudiantes en el curso -->
  <table class="table table-striped table-hover col-12 col-md-4 mt-2 bg-light aUser pUser mr-1" id="wUser">
  <caption class="titulog">Estudiantes en el curso</caption>
    <thead>
      <tr>
        <th scope="col titulog">#</th>
        <th scope="col titulog">Nombre</th>
        <!-- <th scope="col titulog">Nota 1</th> -->
        <!-- <th scope="col titulog">Nota 2</th> -->
        <!-- <th scope="col titulog">Nota 3</th> -->
      </tr>
    </thead>
    <tbody id="EstData">

    </tbody>
  </table>
  <!-- Estudiantes con materias registradas -->
  <table class="table table-striped table-hover col-12 col-md-6 mt-2 bg-light aUser pUser ml-1" id="wUser">
  <caption class="titulog">Estudiantes con materias registradas</caption>
    <thead>
      <tr>
        <th scope="col titulog">#</th>
        <th scope="col titulog">Nombre</th>
        <th scope="col titulog">Nota 1</th>
        <th scope="col titulog">Nota 2</th>
        <th scope="col titulog">Nota 3</th>
        <th scope="col titulog">Nota final</th>
      </tr>
    </thead>
    <tbody id="EstData2">

    </tbody>
  </table>
<!-- Formulario de modificacion -->
<form class="form-general mb-2 mt-3 form-hide" id="dbForm">
  <div class="row d-flex justify-content-center text-center">
  <span for="basic-url" class="titulog w-100 mb-2 mt-2">Nombre del curso</span>
  <div class="input-group mb-3 col-6">
    <input type="text" class="form-control nombreCursosa" placeholder="Matematicas 11" aria-label="Username" aria-describedby="basic-addon1" required>
  </div>
  </div>
  <div class="row d-flex justify-content-center text-center" id="dbForm">
    <span for="basic-url" class="titulog w-100 mb-2 mt-2">Ingresar el periodo academico</span>
    <div class="input-group mb-3 col-7">
      <input type="text" class="form-control periodosa" placeholder="2018-A" aria-label="Username" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="titulog w-100 mb-2">Ingresar el grado</span>
    <div class="input-group mb-3 col-7">
      <input type="text" class="form-control gradosa" placeholder="11" aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
      <span for="basic-url" class="titulog w-100 mb-2">Codigo especial del curso</span>
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
    <span for="basic-url" class="titulog w-100 mb-2 mt-2">Usuario del estudiante</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control userc" placeholder="sasnjiro" aria-label="Username" aria-describedby="basic-addon1"
        required>
    </div>
  </div>

  <section class="pUser eUser aUser" id="wUser">
    <div class="row d-flex justify-content-center text-center">
      <span for="basic-url" class="titulog w-100 mb-2 mt-2">Calificacion estudiante</span>
      <div class="input-group mb-3 col-7">
        <input type="text" class="form-control cec" placeholder="5.0" aria-label="Usernamed" aria-describedby="basic-addon2">
      </div>
    </div>
  </section>

  <section class="eUser aUser" id="wUser">
    <div class="row d-flex justify-content-center text-center">
      <span for="basic-url" class="titulog w-100 mb-2">Calificacion de profesor</span>
      <div class="input-group mb-3 col-7">
        <input type="text" class="form-control cpc" placeholder="5.0" aria-label="11" aria-describedby="basic-addon1">
      </div>
    </div>
  </section>

  <section class=" pUser aUser" id="wUser">
    <div class="row d-flex justify-content-center text-center">
      <span for="basic-url" class="titulog w-100 mb-2">Nota 1 corte</span>
      <div class="input-group mb-3 col-7">
        <input type="text" class="form-control nt1" placeholder="5.0" aria-label="11" aria-describedby="basic-addon1">
      </div>
    </div>
  </section>
  
  <section class="pUser aUser" id="wUser">
    <div class="row d-flex justify-content-center text-center">
      <span for="basic-url" class="titulog w-100 mb-2">Nota 2 corte</span>
      <div class="input-group mb-3 col-7">
        <input type="text" class="form-control nt2" placeholder="5.0" aria-label="11" aria-describedby="basic-addon1">
      </div>
    </div>
  </section>

  <section class=" pUser aUser" id="wUser">
    <div class="row d-flex justify-content-center text-center">
      <span for="basic-url" class="titulog w-100 mb-2">Nota 3 corte</span>
      <div class="input-group mb-3 col-7">
        <input type="text" class="form-control nt3" placeholder="5.0" aria-label="11" aria-describedby="basic-addon1">
      </div>
    </div>
  </section>

  <div class="row d-flex justify-content-center text-center">
    <button type="submit" class="btn btn-primary mb-3 titulog">Enviar</button>
  </div>
</form>
</div>
</section>
`
