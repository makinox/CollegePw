'use-strict'

module.exports = `<div class="container">
<div class="row d-flex justify-content-center text-center">
  <div class="col jumbotron jumbotron-signin">
    <h2 class="bienvenida titulo display-4">
      Crea
    </h2>
    <p class="lead">Ten en cuenta de que si se va a armar un grupo el periodo y el grado deben ser los mismos para que haya relacion
    </p>
  </div>
</div>
<form class="form-general mb-2">
<div class="row d-flex justify-content-center text-center">
<span for="basic-url" class="w-100 mb-2 mt-2">Nombre del curso</span>
<div class="input-group mb-3 col-6">
  <input type="text" class="form-control" placeholder="Matematicas 11" aria-label="Username" aria-describedby="basic-addon1"
    required>
</div>
</div>
<div class="row d-flex justify-content-center text-center">
  <span for="basic-url" class="w-100 mb-2 mt-2">Ingresar el periodo academico</span>
  <div class="input-group mb-3 col-7">
    <input type="text" class="form-control" placeholder="2018-A" aria-label="Username" aria-describedby="basic-addon1" required>
  </div>
</div>
<div class="row d-flex justify-content-center text-center">
  <span for="basic-url" class="w-100 mb-2">Ingresar el grado</span>
  <div class="input-group mb-3 col-7">
    <input type="text" class="form-control" placeholder="11" aria-label="11" aria-describedby="basic-addon1" required>
  </div>
</div>
<div class="row d-flex justify-content-center text-center">
  <span for="basic-url" class="w-100 mb-2">Ingresar el grupo de estudiantes al cual estara destinado el curso</span>
  <div class="input-group mb-3 col-7">
    <input type="text" class="form-control" placeholder="8-A" aria-label="11" aria-describedby="basic-addon1" required>
  </div>
</div>
<div class="row d-flex justify-content-center text-center">
    <span for="basic-url" class="w-100 mb-2">Ingresar el que se hara cargo del curso</span>
    <div class="input-group mb-3 col-7">
      <input type="text" class="form-control" placeholder="Alberto Jimenez" aria-label="11" aria-describedby="basic-addon1" required>
    </div>
  </div>
  <div class="row d-flex justify-content-center text-center">
      <button type="submit" class="btn btn-primary mb-3">Enviar</button>
  </div>
</form>
</div>`