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
<form class="form-general mb-2">
  <div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2 mt-2">Ingresar Id del curso</span>
    <div class="input-group mb-3 col-6">
      <input type="text" class="form-control" placeholder="30" aria-label="Username" aria-describedby="basic-addon1"
        required>
    </div>
  </div>
  <span for="basic-url" class="w-100 mb-2"></span>
  <div class="row d-flex justify-content-center text-center">
    <button type="submit" class="btn btn-primary mb-3">Enviar</button>
  </div>
</form>
<div class="col p-5 m-3"></div>
</div>`
